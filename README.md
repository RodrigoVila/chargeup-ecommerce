# Charge UP E-commerce

## Motivation

I started this project 2 years ago to practice coding skills. The idea is to keep reflecting things I learn on my 9-5 job and improve this project over time. As this is a constant in-progress work, you may find things you don't like or that probably you would do in a different way. I'm open to suggestions and constructive criticism! :)

## Project structure
This project is a monorepo that uses [PNPM Workspaces](https://pnpm.io/workspaces) and [Turbo Repo](https://turbo.build/repo) and it's divided in 2 workspaces: apps (main & admin) and packages (configs and UI components)

### App 1: Main

It's the website and the store. This was thought as a page without routes: One section next to the other. The idea is to make the user scroll through different contents as the information shown can be valuable for them and help the e-commerce to have more sells.

### App 2: Admin (UNDER CONSTRUCTION!)

A friend was helping me with this part of the app and I haven't touched it for a really long time. This is currently not working and won't be included in the building list process. There is a lot of work to do here :). 


### Packages

UI packages (Inputs, Spinner, Button, etc) and config files (Tailwind, Prettier, TypesScript, etc) that are shared between the apps. 

### Tech used

- Structure and build: [PNPM Workspaces](https://pnpm.io/workspaces) and [Turbo Repo](https://turbo.build/repo)
- Apps Front & back: [Next JS](https://nextjs.org/) (Main app: v12, Admin app: v13) with [TypeScript](https://www.typescriptlang.org/)
- CSS: [Tailwind CSS](https://tailwindcss.com/)
- DB: [Mongo DB](https://www.mongodb.com/es) & [Mongoose](https://mongoosejs.com/)
- Payments: [Stripe](https://stripe.com/)
- Deployment: [Vercel](https://vercel.com/)
- Testing: [Vitest](https://vitest.dev/) & [RTL](https://github.com/testing-library/react-testing-library) (pending to implement)

## Installation

Use the package manager [pnpm](https://pnpm.io/) to install and build.

```bash
pnpm install
```
```bash
pnpm build
```

## Usage
In order to run the main app, you can do:
```bash
pnpm --filter main dev
```
As mentioned, Admin app is not working and it won't be included in the building list.

## Next steps
- Tests!! Lot's of them. My idea is to reach a 50% coverage and then move to 80%
- Implement the Admin site.
- Improve some UI components like email & order confirmation pages.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
