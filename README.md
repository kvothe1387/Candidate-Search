# Candidate Search Application

A web application that helps employers streamline their candidate search process by presenting potential candidates one at a time and allowing them to save promising candidates for future reference.

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Deployed Site](#deployed-site)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Description

This application provides employers with an efficient way to review potential job candidates. It displays candidate information one at a time, allowing employers to either save promising candidates to their potential candidates list or skip to the next candidate. The application maintains a persistent list of saved candidates that can be reviewed at any time.

## Features

### Candidate Review
- View detailed candidate information including:
  - Name
  - Username
  - Location
  - Avatar
  - Email
  - GitHub URL
  - Company affiliation
- Simple "+" and "-" buttons for accepting or skipping candidates
- Automatic progression to next candidate
- Notification when no more candidates are available to review

### Saved Candidates Management
- Persistent storage of saved candidates
- Comprehensive list view of all saved candidates
- Detailed information display for each saved candidate
- Clear indication when no candidates have been saved

## Deployed Site
- https://candidate-search-191b.onrender.com/

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Navigate to the project directory:
```bash
cd candidate-search-application
```

3. Install dependencies:
```bash
npm install
```

4. Start the application:
```bash
npm start
```

## Usage

1. **Main Search Page:**
   - Review candidate information
   - Click "+" to save a candidate
   - Click "-" to skip to the next candidate

2. **Potential Candidates Page:**
   - View all saved candidates
   - Access detailed information for each saved candidate
   - Persistent storage ensures saved candidates remain available

## Technologies Used

- Frontend Framework: [Specify framework]
- State Management: [Specify state management solution]
- Storage: [Specify storage solution]
- API Integration: [Specify API details]

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add YourFeature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## License

This project is licensed under the [LICENSE NAME] - see the [LICENSE.md](LICENSE.md) file for details.
