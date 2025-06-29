import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';

interface LessonProgress {
  lessonId: string;
  completed: boolean;
  completedAt?: string;
  timeSpent: number; // in minutes
  attempts: number;
}

interface CourseProgress {
  courseId: string;
  currentLessonId: string;
  lessonsCompleted: LessonProgress[];
  totalTimeSpent: number;
  startedAt: string;
  lastAccessedAt: string;
}

export function useProgress() {
  const { user } = useAuth();
  const [progress, setProgress] = useState<CourseProgress[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      loadProgress();
    } else {
      setProgress([]);
      setLoading(false);
    }
  }, [user]);

  const loadProgress = () => {
    try {
      const savedProgress = localStorage.getItem(`progress_${user?.id}`);
      if (savedProgress) {
        setProgress(JSON.parse(savedProgress));
      }
    } catch (error) {
      console.error('Error loading progress:', error);
    } finally {
      setLoading(false);
    }
  };

  const saveProgress = (newProgress: CourseProgress[]) => {
    try {
      localStorage.setItem(`progress_${user?.id}`, JSON.stringify(newProgress));
      setProgress(newProgress);
    } catch (error) {
      console.error('Error saving progress:', error);
    }
  };

  const getCourseProgress = (courseId: string): CourseProgress | undefined => {
    return progress.find(p => p.courseId === courseId);
  };

  const startCourse = (courseId: string, firstLessonId: string) => {
    const existingProgress = getCourseProgress(courseId);
    if (existingProgress) return;

    const newCourseProgress: CourseProgress = {
      courseId,
      currentLessonId: firstLessonId,
      lessonsCompleted: [],
      totalTimeSpent: 0,
      startedAt: new Date().toISOString(),
      lastAccessedAt: new Date().toISOString()
    };

    saveProgress([...progress, newCourseProgress]);
  };

  const updateCurrentLesson = (courseId: string, lessonId: string) => {
    const updatedProgress = progress.map(p => 
      p.courseId === courseId 
        ? { ...p, currentLessonId: lessonId, lastAccessedAt: new Date().toISOString() }
        : p
    );
    saveProgress(updatedProgress);
  };

  const completeLesson = (courseId: string, lessonId: string, timeSpent: number) => {
    const updatedProgress = progress.map(p => {
      if (p.courseId !== courseId) return p;

      const existingLesson = p.lessonsCompleted.find(l => l.lessonId === lessonId);
      const updatedLessons = existingLesson
        ? p.lessonsCompleted.map(l => 
            l.lessonId === lessonId 
              ? { ...l, attempts: l.attempts + 1, timeSpent: l.timeSpent + timeSpent }
              : l
          )
        : [
            ...p.lessonsCompleted,
            {
              lessonId,
              completed: true,
              completedAt: new Date().toISOString(),
              timeSpent,
              attempts: 1
            }
          ];

      return {
        ...p,
        lessonsCompleted: updatedLessons,
        totalTimeSpent: p.totalTimeSpent + timeSpent,
        lastAccessedAt: new Date().toISOString()
      };
    });

    saveProgress(updatedProgress);
  };

  const getCompletionPercentage = (courseId: string, totalLessons: number): number => {
    const courseProgress = getCourseProgress(courseId);
    if (!courseProgress) return 0;
    
    return Math.round((courseProgress.lessonsCompleted.length / totalLessons) * 100);
  };

  const isLessonCompleted = (courseId: string, lessonId: string): boolean => {
    const courseProgress = getCourseProgress(courseId);
    return courseProgress?.lessonsCompleted.some(l => l.lessonId === lessonId && l.completed) || false;
  };

  return {
    progress,
    loading,
    getCourseProgress,
    startCourse,
    updateCurrentLesson,
    completeLesson,
    getCompletionPercentage,
    isLessonCompleted
  };
}