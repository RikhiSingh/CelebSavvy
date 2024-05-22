# CelebSavvy

CelebSavvy is a SaaS AI Companion app currently under development. It allows users to chat with AI versions of their favorite celebrities and more. Built using modern web technologies, this project aims to deliver an engaging and interactive user experience.

## Features

- **Frontend**: Next.js, React, and TypeScript
- **Styling**: TailwindCSS
- **Backend**: Node.js and Express
- **Database**: MongoDB
- **State Management**: Zustand
- **AI Integration**: OpenAI GPT
- **Authentication**: Google SSO
- **Payments**: Stripe integration for premium features

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/RikhiSingh/CelebSavvy.git
   cd CelebSavvy
   
2. **Install Dependencies for individual packages**
   ```bash
   npm install
   
3. **Set up environment variables** <br/>
   Create a .env file in the root directory and add the necessary environment variables.
   *Namely*
   ```bash
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
    CLERK_SECRET_KEY

    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

4. **Run the development server**
   ```bash
   npm run dev

5. **Access the Application** <br />
   Open http://localhost:3000 in your browser.

## Usage
- Chat with AI versions of celebrities.
- Upgrade to premium for additional features using Stripe.
  
## Contributing <br />
Contributions are welcome! Please follow these steps: <br />

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Push to your branch.
5. Open a pull request.

<br />
This Markdown file provides a clear and styled README for your project. Feel free to further customize it as needed!
