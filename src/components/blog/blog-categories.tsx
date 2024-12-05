import { Badge } from "@/components/ui/badge";

export function BlogCategories() {
  const categoriesList = [
    { name: "Web Development", count: 12 },
    { name: "Artificial Intelligence", count: 8 },
    { name: "Design", count: 6 },
    { name: "Programming", count: 15 },
    { name: "Technology", count: 10 },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold">Categories</h2>
      <div className="flex flex-wrap gap-2">
        {categoriesList.map(({ name, count }) => (
          <Badge
            key={name}
            variant="secondary"
            className="cursor-pointer hover:bg-secondary/80"
          >
            {name} ({count})
          </Badge>
        ))}
      </div>
    </div>
  );
}
