var suggests = ["align", "goals", "successful", "resources", "capitalize", "engage", "presence",
"connect", "promote", "will solve", "opportunity", "expand", "analysis", "implement", "first mover advantage",
"solutions", "efficiency", "global marketplace", "international", "cross-cultural", "communication", "manage",
"distill", "monitor", "outsource", "function", "growing", "potential", "wellness-oriented", "specialized",
"specializing", "healthy", "healthier", "health", "niche", "agile", "market driven opportunity", "problem", "focus",
"approach", "Vision Statement", "Mission Statement", "solution", "resolve"];
    $("#area5").asuggest(suggests, {
        'endingSymbols': ' ',
        'stopSuggestionKeys': [$.asuggestKeys.RETURN],
        'minChunkSize': 1,
        'delimiters': ', \n'
    });
