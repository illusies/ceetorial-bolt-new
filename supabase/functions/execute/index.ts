Deno.serve(async (req) => {
  try {
    const { code } = await req.json();
    const result = await compileAndRun(code);

    // Determine status code
    let status = 200;
    if (result.errors?.length > 0) {
      status = result.errors.some(e => e.type === 'compilation') ? 400 : 500;
    }

    return new Response(JSON.stringify(result), { status });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: err.message }),
      { status: 500 }
    );
  }
});