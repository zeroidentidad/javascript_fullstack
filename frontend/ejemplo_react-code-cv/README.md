**🔥Build your own Resume in seconds.**

# code-resume

> Create your own offline-first resume by using code-resume.

## Demo original author

https://code-resume.herokuapp.com/

## Features

* **Offline-first**

* **Theme support Dark & Light mode**

* **Export PDF**
  
* **Easy Customization**

* **Responsive for all devices**

## Quick start

**Install:**

<pre>yarn install</pre>

**Run:**

<pre>yarn start-dev</pre>

**Build:**

<pre>yarn build</pre>

## Customization

For Adding resume details:-

<pre>cd data</pre>

Then open **index.js** & change details

**Title**

```js
export const Title = 'Some defautl title';
```
**Resume Details**

```js
export const Resume = {
    intoduction: `{
        Add intoduction
    }`,

    experience: `{
        Add experience
    }`,

    skills: `{
        Add skills
    }`

}
```

**Social Links**

```
    resume: '/resume.pdf',
    linkedin: 'https://www.linkedin.com/in/zeroidentidad/',
    twitter: 'https://twitter.com/zeroidentidad',
    github: 'https://github.com/zeroidentidad'
```
