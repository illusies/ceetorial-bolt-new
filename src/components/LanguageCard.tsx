import React from 'react';
import { Link } from 'react-router-dom';
import { Play, BookOpen, Trophy, Clock } from 'lucide-react';

interface LanguageCardProps {
  language: {
    name: string;
    slug: string;
    description: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    progress: number;
    totalLessons: number;
    completedLessons: number;
    color: string;
    icon: string;
  };
}

const LanguageCard: React.FC<LanguageCardProps> = ({ language }) => {
  const difficultyColors = {
    Beginner: 'bg-secondary-100 text-secondary-800',
    Intermediate: 'bg-yellow-100 text-yellow-800',
    Advanced: 'bg-accent-100 text-accent-800',
  };

  return (
    <div className="bg-white rounded-xl border border-neutral-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`w-12 h-12 rounded-lg ${language.color} flex items-center justify-center text-white font-mono font-bold text-lg`}>
            {language.icon}
          </div>
          <div>
            <h3 className="font-semibold text-lg text-neutral-900">{language.name}</h3>
            <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${difficultyColors[language.difficulty]}`}>
              {language.difficulty}
            </span>
          </div>
        </div>
      </div>

      <p className="text-neutral-600 text-sm mb-4 line-clamp-3">{language.description}</p>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-neutral-500">Progress</span>
          <span className="text-xs font-medium text-neutral-700">{language.progress}%</span>
        </div>
        <div className="w-full bg-neutral-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full ${language.color.replace('bg-', 'bg-').replace('-500', '-600')}`}
            style={{ width: `${language.progress}%` }}
          ></div>
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center justify-between text-xs text-neutral-500 mb-4">
        <div className="flex items-center space-x-1">
          <BookOpen className="h-3 w-3" />
          <span>{language.completedLessons}/{language.totalLessons} lessons</span>
        </div>
        <div className="flex items-center space-x-1">
          <Clock className="h-3 w-3" />
          <span>~2h remaining</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex space-x-2">
        <Link
          to={`/learn/${language.slug}`}
          className="flex-1 bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors flex items-center justify-center space-x-1"
        >
          <Play className="h-3 w-3" />
          <span>Continue</span>
        </Link>
        <button className="px-3 py-2 border border-neutral-300 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors">
          <Trophy className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
};

export default LanguageCard;