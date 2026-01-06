export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    date: string;
    images: string[];
    tag: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Diet changes for optimal health results",
        excerpt: "Achieving optimal health is a journey that requires thoughtful adjustments to both physical activity and, perhaps more importantly...",
        content: "Achieving optimal health is a journey that requires thoughtful adjustments to both physical activity and, perhaps more importantly, our nutritional choices. A balanced diet isn't just about weight management; it's about providing your body with the essential nutrients it needs to function at its peak.\n\nKey areas to focus on include:\n1. Hydration: Drink plenty of water throughout the day.\n2. Whole Foods: Prioritize fruits, vegetables, and whole grains.\n3. Lean Proteins: Incorporate sources like fish, poultry, and beans.\n4. Mindful Eating: Pay attention to hunger and fullness cues.\n\nChanging your diet can significantly impact your energy levels, mental clarity, and long-term health. Start with small, sustainable changes for the best results.",
        author: "Frederick Purdy",
        date: "August 25, 2024",
        images: [
            "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1490645935967-10de6ba17051?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2000&auto=format&fit=crop"
        ],
        tag: "Health Tips"
    },
    {
        id: 2,
        title: "10 tips for healthy eating to stay strong",
        excerpt: "A balanced diet is crucial for optimal health. Ensure you're taking the right proportions of carbohydrates, proteins, and fats.",
        content: "Maintaining strength and vitality requires a consistent approach to nutrition. Here are 10 tips to help you stay on track:\n\n1. Never skip breakfast to jumpstart your metabolism.\n2. Include a variety of colorful vegetables in every meal.\n3. Limit processed sugars and artificial sweeteners.\n4. Choose healthy fats from avocados, nuts, and olive oil.\n5. Keep healthy snacks like fruits or yogurt close by.\n6. Practice portion control to avoid overeating.\n7. Cook at home more often to control ingredients.\n8. Read food labels carefully for hidden additives.\n9. Stay hydrated, as thirst can often be mistaken for hunger.\n10. Allow for occasional treats to maintain a sustainable balance.\n\nBy following these tips, you can build a stronger foundation for lifelong wellness.",
        author: "Frederick Purdy",
        date: "August 25, 2024",
        images: [
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1490645935967-10de6ba17051?q=80&w=2000&auto=format&fit=crop"
        ],
        tag: "Food & Nutrition"
    },
    {
        id: 3,
        title: "The importance of regular physical activity",
        excerpt: "Physical activity is essential for maintaining a healthy heart and strong muscles. Find an activity you enjoy and stick with it.",
        content: "Exercise is one of the pillars of a healthy lifestyle. It strengthens the cardiovascular system, improves mood through the release of endorphins, and helps maintain a healthy weight. Aim for at least 150 minutes of moderate-intensity aerobic activity per week, along with muscle-strengthening exercises on two or more days.\n\nWhether it's walking, swimming, cycling, or yoga, the best exercise is the one you enjoy enough to do consistently. Remember to listen to your body and consult with a healthcare professional before starting a new fitness regimen.",
        author: "Dr. Sarah Johnson",
        date: "September 02, 2024",
        images: [
            "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2000&auto=format&fit=crop"
        ],
        tag: "Blog"
    }
];
