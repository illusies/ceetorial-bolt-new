export const logError = async (error, context) => {
  const errorData = {
    timestamp: new Date().toISOString(),
    ...error,
    context: JSON.stringify(context),
  };

  // Send to Supabase errors table
  await supabase
    .from('runtime_errors')
    .insert(errorData);
};