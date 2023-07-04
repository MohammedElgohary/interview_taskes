# Lumofy Task `[View](https://interview-taskes.vercel.app/)`

## Task

```plain
  Task Requirements:
  Create an app that allows the user to list, view, add, edit and delete courses.
  Editing courses should always adds it as a "draft edit", and not edit the original.
  The user should be able to navigate between these draft edits per course.
  The data should be presistint after closing the app.

  Tools:
  * React.JS 18
  * Any state managmenet library you prefer
  * Any UI components library you prefer

  Model fields:
  Course: id, name, thumbnail, description, duration, isNew
```

## How to run

```shell
    npm install
    npm run dev
```

## Features

- Lazy Loading
- Code splitting
- Using icons
- Search (Not debounced as the data is saved in `localStorage`)
- Redirection and navigation
- Edit head `title` tag as an example for `SEO` Enhancement
- Confirm messages
  - When close the form and have changes
  - When we try to delete a course

## Directed by `Mohamed Samara El-Gohary`
