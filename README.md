# FireAnime

1. Clone the Repository

```shellscript
git clone git@github.com:FireAnime/fireanime.git
cd fireanime
```

2. Install dependencies:

```shellscript
bun install
```


3. Start the development server:

```shellscript
bun run dev
```


4. Open your browser and navigate to `http://localhost:3000`


### Building for Production

```shellscript
bun run build
```

To start the production server:

```shellscript
bun run start
```

## 🧩 Project Structure

```plaintext
fireanime/
├── app/                  # Next.js App Router pages
│   ├── anime/            # Anime details pages
│   ├── calendar/         # Release calendar page
│   ├── genres/           # Genre browsing page
│   ├── search/           # Search functionality
│   ├── terms/            # Terms of service page
│   ├── privacy/          # Privacy policy page
│   ├── about/            # About page
│   ├── layout.tsx        # Root layout component
│   ├── page.tsx          # Homepage
│   └── globals.css       # Global styles
├── components/           # Reusable components
│   ├── ui/               # UI components (shadcn)
│   ├── anime-card.tsx    # Anime card component
│   ├── anime-grid.tsx    # Grid layout for anime cards
│   ├── footer.tsx        # Footer component
│   ├── hero-slider.tsx   # Hero slider component
│   ├── navbar.tsx        # Navigation bar component
│   └── ...               # Other components
├── lib/                  # Utility functions and API
│   └── api.ts            # API service functions
├── public/               # Static assets
├── .eslintrc.json        # ESLint configuration
├── next.config.mjs       # Next.js configuration
├── package.json          # Project dependencies
├── README.md             # Project documentation
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🤝 Contributing

We welcome contributions from the community! Whether you're fixing bugs, adding features, or improving documentation, your help is appreciated.

### How to Contribute

1. Fork the repository
2. Create your feature branch:

```shellscript
git checkout -b feature/amazing-feature
```


3. Commit your changes:

```shellscript
git commit -m 'Add some amazing feature'
```


4. Push to the branch:

```shellscript
git push origin feature/amazing-feature
```


5. Open a Pull Request


### Development Guidelines

- Follow the existing code style and naming conventions
- Write clear, commented, and testable code
- Update documentation for any new features
- Test your changes thoroughly before submitting a pull request


## 📝 Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) to understand the expectations for participation in our community.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📸 Screenshots











## 📞 Contact

- **Website**: [fireanime-deutsche-animes.vercel.app](https://fireanime-deutsche-animes.vercel.app/)


---

<p align="center">Made with ❤️ by the anime community, for the anime community</p>