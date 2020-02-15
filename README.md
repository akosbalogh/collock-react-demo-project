# Collock demo project
The exercice is to create a web page using React with a search bar using Github API: https://jobs.github.com/api

---
## Setup locally
Before `yarn start` add this to your `.env.local`:
```
REACT_APP_API_URL='/api/positions.json'
```

## Development process:
- Used React, Typescript, Material-ui, ESLint
- Basic material app layout created
- Search bar added
- Job listing component created
- Debounced search hook created (500ms)
- Handling data between components

__Notes__: As this is a demo and small project, the _JobListing_ component is loading the data by the debounced search query property.

---
Future feature ideas:
- Pagination (supported by material-ui table)
- Sorting  (supported by material-ui table)
- Searching by other fields
