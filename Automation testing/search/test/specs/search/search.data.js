export default [
    {
      "description": "_search toor",
      "keyword": "toor",
      "expected": "SEARCH_FAIL"
    },
    {
      "description": "_search abc!@#",
      "keyword": "abc!@#",
      "expected": "SEARCH_SUCCESS"
    },
    {
      "description": "_no keyword",
      "keyword": "",
      "expected": "SEARCH_FAIL"
    },
    {
      "description": "_search pan",
      "keyword": "pan",
      "expected": "SEARCH_SUCCESS"
    }
  ]