# Anugerah Avirama Nawasena Website

This is a [Next.js](https://nextjs.org/) project for the Anugerah Avirama Nawasena awards website, built with Next.js 15.

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/aan-awards-website.git
```

2. Navigate to the project directory
```bash
cd aan-awards-website
```

3. Install dependencies
```bash
npm install
# or
yarn install
```

4. Create a `.env.local` file based on the `.env.local.example` template
```bash
cp .env.local.example .env.local
```

5. Start the development server
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The project follows Next.js 15 App Router structure:

```
aan-awards-website/
├── app/                  # Next.js 15 App Router 
│   ├── layout.js         # Root layout
│   ├── page.js           # Home page
│   ├── about/page.js     # About page
│   ├── past-events/page.js # Past events page
│   ├── contact/page.js   # Contact page
│   └── globals.css       # Global styles
├── components/           # Reusable React components
│   ├── Header.js         # Navigation header
│   ├── HeroBanner.js     # Main hero section
│   ├── AboutSection.js   # "Apa Itu" section
│   ├── Testimonial.js    # Testimonial component
│   ├── Footer.js         # Page footer
│   └── Button.js         # Reusable button component
├── public/               # Static assets
│   ├── images/           # Image assets
│   └── favicon.ico       # Site favicon
└── styles/               # Component-specific styles
```

## Development Guidelines

### Component Structure

- Each component should have its own file in the `components/` directory
- Use CSS Modules for styling (located in the `styles/` directory)
- Keep components small and focused on a single responsibility

### Styling

- Use CSS Modules for component-specific styling
- Global styles are defined in `app/globals.css`
- The site uses a color palette defined with CSS variables in `globals.css`

### Responsive Design

- The site is fully responsive with mobile-first approach
- Use media queries defined in component-specific CSS files
- Break
