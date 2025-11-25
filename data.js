// Projects Data
const projects = [
    {
        id: 1,
        title: "Shakespeare GPT",
        shortDescription: "A language model trained to generate text in Shakespeare's style.",
        fullDescription: "Shakespeare GPT is a transformer-based language model designed to generate poetry, plays, and prose reminiscent of William Shakespeare. Built from scratch using PyTorch, this project demonstrates deep understanding of transformer architecture and text generation. The model is containerized with Docker for easy deployment.",
        tech: ["PyTorch", "Transformers", "Python", "Docker", "Jupyter"],
        github: "https://github.com/bigyan08/shakespeare_gpt",
        demo: null,
        image: "🎭",
        details: [
            "Custom transformer implementation trained on Shakespearean texts",
            "Command-line interface for text generation with customizable prompts",
            "Dockerized for reproducible deployment",
            "Jupyter notebooks for experimentation and model analysis",
            "Support for plays, sonnets, and dialogue generation",
            "Configurable model architecture and training parameters"
        ]
    },
    {
        id: 2,
        title: "RAG Research Assistant",
        shortDescription: "Simple RAG-based assistant for querying thousands of research papers from arXiv.",
        fullDescription: "An intelligent research assistant that uses Retrieval-Augmented Generation (RAG) to help researchers query and understand academic papers from arXiv. The system can answer questions about thousands of research papers with context-aware responses and chat history support.",
        tech: ["Python", "RAG", "Vector DB", "NLP", "Jupyter"],
        github: "https://github.com/bigyan08/RAG_research_assistant",
        demo: null,
        image: "🔬",
        details: [
            "RAG pipeline for semantic search across research papers",
            "Support for querying thousands of arXiv papers",
            "Chat history for contextual follow-up questions",
            "Vector database integration for efficient retrieval",
            "Jupyter notebook interface for interactive exploration",
            "Recently updated with improved dependencies"
        ]
    },
    {
        id: 3,
        title: "FormalNet Web",
        shortDescription: "Web application for text formalization using transformer models.",
        fullDescription: "FormalNet is a Django-based web application that uses transformer models to convert informal text into formal, professional language. The project includes a complete web interface and API for text transformation, making it easy to integrate formalization capabilities into other applications.",
        tech: ["Django", "Python", "Transformers", "HTML", "TeX"],
        github: "https://github.com/bigyan08/formalNetWeb",
        demo: null,
        image: "📝",
        details: [
            "Django web application with clean UI",
            "Transformer-based model for informal-to-formal text conversion",
            "REST API for easy integration",
            "Complete project documentation in LaTeX",
            "Support for batch text processing",
            "Real-time text transformation"
        ]
    },
    {
        id: 4,
        title: "ChatBud - Real-time Chat Rooms",
        shortDescription: "Web app for creating and joining chat rooms using Django.",
        fullDescription: "ChatBud is a real-time chat application built with Django that allows users to create and join chat rooms. Deployed on Vercel with Supabase for database management, it demonstrates full-stack web development skills with Django framework.",
        tech: ["Django", "Python", "JavaScript", "CSS", "PostgreSQL"],
        github: "https://github.com/bigyan08/chatbud",
        demo: "https://chat-room-kappa-topaz.vercel.app/",
        image: "💬",
        details: [
            "Real-time chat functionality with Django",
            "Create and join multiple chat rooms",
            "User authentication and profiles",
            "Deployed on Vercel with Supabase PostgreSQL",
            "Responsive design with custom CSS",
            "Live demo available"
        ]
    },
    {
        id: 5,
        title: "Blog Platform",
        shortDescription: "Full-featured blog web application with Django.",
        fullDescription: "A complete blog platform built with Django featuring user authentication, post creation/editing/deletion, and full CRUD operations. The application is deployed on Vercel using Supabase for PostgreSQL database, demonstrating production-ready Django development.",
        tech: ["Django", "Python", "Bootstrap", "PostgreSQL", "Vercel"],
        github: "https://github.com/bigyan08/blog",
        demo: "https://blog-seven-delta-13.vercel.app/",
        image: "✍️",
        details: [
            "Full CRUD operations for blog posts",
            "User authentication and profile management",
            "Pagination and post filtering",
            "Bootstrap-based responsive design",
            "Deployed on Vercel with Supabase PostgreSQL",
            "SQLite to PostgreSQL migration for production"
        ]
    },
    {
        id: 6,
        title: "PyTorch Deep Learning Journey",
        shortDescription: "Comprehensive collection of PyTorch learning projects and experiments.",
        fullDescription: "A repository documenting my journey learning PyTorch for deep learning. Includes course lessons, bootcamp sessions, and various projects covering computer vision, CNNs, pose estimation, and MNIST digit recognition. This showcases hands-on learning and experimentation with neural networks.",
        tech: ["PyTorch", "Python", "NumPy", "Jupyter", "Computer Vision"],
        github: "https://github.com/bigyan08/pytorch_for_deep_learning",
        demo: null,
        image: "🧠",
        details: [
            "Comprehensive PyTorch learning materials",
            "MNIST digit recognition implementation",
            "Pose estimation projects with CNNs",
            "Bootcamp session exercises and solutions",
            "Training and validation pipelines",
            "Jupyter notebooks with detailed explanations"
        ]
    }
];

// Experience Timeline Data
const experiences = [
    {
        id: 1,
        date: "July 2024 - January 2025",
        title: "AI Bootcamp - Innovative Computer Engineering Student's Society",
        description: "Collaborated with peers on deep learning projects including Pose Estimation and CNNs. Participated in hands-on sessions covering PyTorch, computer vision, and EDA. Contributed to group discussions on model performance and architecture choices."
    },
    {
        id: 2,
        date: "2024",
        title: "Nepal Data Challenge 001 - NepBERTa Text Sentiment Classification",
        description: "Participated in Nepal Data Challenge using NepBERTa model for Nepali Text Sentiment Classification. Achieved 70% accuracy and ranked 2nd in the final leaderboard. Worked with transformer architectures for Nepali language processing."
    },
    {
        id: 3,
        date: "2024",
        title: "TechParva 3.0 Datathon - Bank Loan Grade Prediction",
        description: "Participated in TechParva 3.0 Datathon, working on a bank loan dataset to predict loan worthiness grades from A to G. Applied machine learning techniques for credit risk assessment."
    },
    {
        id: 4,
        date: "2024",
        title: "Yantra Hackathon - YOLOv8 Object Detection",
        description: "Participated in Yantra Hackathon by Pokhara Engineering College. Worked on an object detection project fine-tuning a YOLOv8 model to detect cultural Nepali tools, showcasing computer vision skills."
    },
    {
        id: 5,
        date: "2023",
        title: "AlexNet Architecture Research & Historical Impact Analysis",
        description: "Conducted research on AlexNet's design and historical impact on deep convolutional networks. Compared model depth, filter sizes, and use of ReLU vs. other early models, demonstrating deep understanding of CNN evolution."
    },
    {
        id: 6,
        date: "May 2023 - Present",
        title: "Computer Engineering Student - Paschimanchal Campus, IOE, TU",
        description: "Currently pursuing Bachelor's degree in Computer Engineering at IOE, Pokhara. Maintaining strong academic performance with GPA 3.59 while actively engaging in AI/ML projects and technical communities."
    }
];

// Export data
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { projects, experiences };
}
