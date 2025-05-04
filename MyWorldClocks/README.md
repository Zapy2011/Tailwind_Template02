# World Clocks ⚡️

World Clocks is a modern, responsive web application that allows users to view the current time in major cities across all continents. Built with [Qwik](https://qwik.dev/) and [Tailwind CSS](https://tailwindcss.com/), the app features real-time clock updates, continent-based navigation, and a clean, minimalist interface. Users can easily switch between continents to see the local times in cities around the world, making it ideal for travelers, remote teams, and anyone working across time zones.

## Features

- **Continent-based Navigation**: Instantly switch between Asia, Europe, Africa, North America, South America, Australia, and Antarctica
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Major Cities**: Displays current time in major cities worldwide
- **Dynamic Updates**: Real-time clock updates for all displayed cities
- **Clean UI**: Modern, minimalist interface with Tailwind CSS styling
- **Fast Performance**: Built with Qwik for optimal loading and rendering performance

## Technologies Used

- [Qwik](https://qwik.dev/) – Core framework
- [Tailwind CSS](https://tailwindcss.com/) – Styling
- [Qwik City](https://qwik.dev/qwikcity/overview/) – Routing and layouts
- TypeScript – Type safety and better development experience

## SEO & Social Sharing

World Clocks is optimized for search engines and social media sharing:

- Descriptive meta tags for title, description, and keywords
- Open Graph and Twitter Card support for rich link previews
- Canonical URLs for better indexing
- Accessible markup and alt text for images

## Project Structure

The project follows a well-organized structure:

```
├── public/                  # Static assets
│   ├── favicon.ico         # Application favicon
│   ├── world-clock.png     # Logo image
│   └── manifest.json       # PWA manifest
└── src/
    ├── components/         # Reusable components
    │   ├── clock/         # Clock component and styles
    │   ├── navbar/        # Navigation component
    │   └── router-head/   # Head component
    ├── data/              # Data files
    │   └── clocks.json    # Cities and timezone data
    ├── model/             # Data models
    │   └── clock-data.ts  # Clock data types
    └── routes/            # Application routes
        ├── [continent]/   # Dynamic continent routes
        └── index.tsx      # Home page
```

### Key Components

- `clock/`: The main clock component that displays time for each city
- `navbar/`: Navigation bar with continent selection
- `clocks.json`: Contains data for all cities including:
  - City name and ID
  - Continent and country
  - UTC offset
  - Major/minor city classification

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd MyWorldClocks
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm start
```

The application will be available at `http://localhost:5173`

## Development

### Available Scripts

- `pnpm start` - Start the development server
- `pnpm build` - Create a production build
- `pnpm preview` - Preview the production build locally

### Adding New Cities

To add new cities, modify the `src/data/clocks.json` file. Each city entry should include:

```json
{
  "continent": "Continent Name",
  "country": "Country Name",
  "state": "State/Region",
  "city": "City Name",
  "id": "city_name",
  "utcOffset": 0,
  "major": true/false
}
```

## Features in Development

- Search functionality for cities
- Favorite cities selection
- Customizable time formats
- Dark/Light theme toggle
- Weather information integration

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Static Site Generator (Node.js)

```shell
pnpm build.server
```
