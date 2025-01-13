export default function Loading() {
  return (
    <div className="p-4 mx-4 animate-pulse">
      <div className="h-8 bg-gradient-to-r from-cyan-500 to-pink-500 rounded w-3/4 mb-4"></div>
      <div className="space-y-3">
        <div className="h-4 bg-gradient-to-r from-cyan-500 to-pink-500 rounded w-full"></div>
        <div className="h-4 bg-gradient-to-r from-cyan-500 to-pink-500 rounded w-5/6"></div>
        <div className="h-4 bg-gradient-to-r from-cyan-500 to-pink-500 rounded w-2/3"></div>
      </div>
      <div className="flex gap-2 mt-4">
        <div className="h-6 w-20 bg-gradient-to-r from-cyan-500 to-pink-500 rounded"></div>
        <div className="h-6 w-16 bg-gradient-to-r from-cyan-500 to-pink-500 rounded"></div>
        <div className="h-6 w-24 bg-gradient-to-r from-cyan-500 to-pink-500 rounded"></div>
      </div>
    </div>
  );
}
