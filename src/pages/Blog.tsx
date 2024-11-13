import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const blogPosts = [
  {
    title: "Pet Dental Health Month",
    date: "February 15, 2024",
    excerpt: "Learn about the importance of dental care for your pets...",
  },
  {
    title: "Summer Safety Tips for Pets",
    date: "February 10, 2024",
    excerpt: "Keep your pets safe and comfortable during hot weather...",
  },
  {
    title: "Understanding Pet Vaccinations",
    date: "February 5, 2024",
    excerpt: "A comprehensive guide to pet vaccinations and their importance...",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Pet Care Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <p className="text-sm text-gray-500">{post.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{post.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;