import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

const Blog = () => {
  const { toast } = useToast();
  const [isCreating, setIsCreating] = useState(false);
  const [newPost, setNewPost] = useState({
    title: "",
    excerpt: "",
    content: "",
  });

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([
    {
      title: "Salud Dental de las Mascotas",
      date: "15 de Febrero, 2024",
      excerpt: "Aprende sobre la importancia del cuidado dental para tus mascotas...",
      content: "Contenido completo del post sobre salud dental...",
    },
    {
      title: "Consejos de Seguridad para el Verano",
      date: "10 de Febrero, 2024",
      excerpt: "Mantén a tus mascotas seguras y cómodas durante el clima cálido...",
      content: "Contenido completo del post sobre seguridad en verano...",
    },
    {
      title: "Entendiendo las Vacunas para Mascotas",
      date: "5 de Febrero, 2024",
      excerpt: "Una guía completa sobre las vacunas para mascotas y su importancia...",
      content: "Contenido completo del post sobre vacunas...",
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const date = new Date().toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    
    setBlogPosts([
      {
        ...newPost,
        date,
      },
      ...blogPosts,
    ]);

    setNewPost({ title: "", excerpt: "", content: "" });
    setIsCreating(false);
    
    toast({
      title: "Post publicado",
      description: "Tu artículo ha sido publicado exitosamente.",
    });
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold">Blog Veterinario</h1>
          <Button onClick={() => setIsCreating(!isCreating)}>
            {isCreating ? "Cancelar" : "Nuevo Post"}
          </Button>
        </div>

        {isCreating && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Crear Nuevo Post</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Título</label>
                  <Input
                    value={newPost.title}
                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Resumen</label>
                  <Input
                    value={newPost.excerpt}
                    onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Contenido</label>
                  <Textarea
                    value={newPost.content}
                    onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                    required
                    className="min-h-[200px]"
                  />
                </div>
                <Button type="submit">Publicar</Button>
              </form>
            </CardContent>
          </Card>
        )}

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