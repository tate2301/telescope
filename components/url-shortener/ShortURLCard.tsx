interface ShortURLCardProps {
  title: string;
  url: string;
  short_url: string;
}

export default function ShortURLCard({
  title,
  url,
  short_url,
}: ShortURLCardProps) {
  return (
    <div className="flex flex-col gap-4 p-4 border rounded-lg shadow border-zinc-50 bg-zinc-100">
      <div className="w-12 bg-gray-200 rounded-lg aspect-square" />
      <div className="flex flex-col gap-1">
        <p className="text-lg sf">{title}</p>
        <div>
          <p className="text-sm">{url}</p>
          <p className="text-sm">{short_url}</p>
        </div>
      </div>
    </div>
  );
}
