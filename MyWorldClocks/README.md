# World Clocks ⚡️

A modern, responsive web application built with Qwik and Tailwind CSS that displays time zones across different continents. The application provides an intuitive interface for viewing current times in major cities worldwide.

## Features

- **Continent-based Navigation**: Easy navigation through different continents (Asia, Europe, Africa, North America, South America, Australia, Antarctica)
- **Responsive Design**: Fully responsive layout that works on desktop and mobile devices
- **Major Cities**: Display of current time in major cities across the world
- **Dynamic Updates**: Real-time clock updates for all displayed cities
- **Clean UI**: Modern, minimalist interface with Tailwind CSS styling
- **Fast Performance**: Built with Qwik for optimal loading and rendering performance

## Technologies Used

- [Qwik](https://qwik.dev/) - For the core framework
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [Qwik City](https://qwik.dev/qwikcity/overview/) - For routing and layouts
- TypeScript - For type safety and better development experience

## Project Structure

This project is using Qwik with [QwikCity](https://qwik.dev/qwikcity/overview/). QwikCity is just an extra set of tools on top of Qwik to make it easier to build a full site, including directory-based routing, layouts, and more.

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
