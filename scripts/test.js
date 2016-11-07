var suggests = ["align", "goals", "successful", "resources", "capitalize", "engage", "presence",
"connect", "promote", "will solve", "opportunity", "expand", "analysis", "implement", "first mover advantage",
"solutions", "efficiency", "global marketplace", "international", "cross-cultural", "communication", "manage",
"distill", "monitor", "outsource", "function", "growing", "potential", "wellness-oriented", "specialized",
"specializing", "healthy", "healthier", "health", "niche", "agile", "market driven opportunity", "problem", "focus",
"approach", "Vision Statement", "Mission Statement", "solution", "resolve", "alternatives", "Competition",
"competitive edge", "competitive edges", "competitive landscape", "competitive space", "Competitors", "decline",
"direct competition", "direct competitor", "domestic", "expansion", "figures", "foreign", "growth",
"indirect competition", "indirect competitor", "keys to success", "Major players", "NAICS code",
"research", "substitute", "success factors", "will compete in", "sustainable competitive advantage",
"key success factors", "fragmented", "dominant", "scattered", "monopoly", "oligopoly", "duopoly",
"growth life cycle", "technology", "barriers to entry", "threat of substitutes", "buyer power",
"supplier power", "competitive rivalry", "threat of entry", "critical outcomes", "emerging",
"next best alternative", "NBA", "source of growth", "mature stage of growth", "leisure activities",
"client base", "boost demand", "decline", "proves favorable", "per capita"];
    $("#area5").asuggest(suggests, {
        'endingSymbols': ' ',
        'stopSuggestionKeys': [$.asuggestKeys.RETURN],
        'minChunkSize': 1,
        'delimiters': ', \n'
    });
