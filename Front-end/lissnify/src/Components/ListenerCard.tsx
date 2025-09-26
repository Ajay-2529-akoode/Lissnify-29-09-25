type Listener = {
  id: string;
  name: string;
  image: string;
  category: string;
  description: string;
  badge?: string;
};

export type { Listener };

export default function ListenerCard({ listener }: { listener: Listener }) {
  return (
    
    <div className="rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#EEE] p-3 sm:p-4 lg:p-5">
      <div className="flex items-center gap-3 sm:gap-4">
        <img
          src={listener.image}
          alt={listener.name}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border border-[#EEE] flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-semibold text-[#111] text-sm sm:text-base truncate">{listener.name}</h3>
            {listener.badge && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-[#FFF0E8] text-[#FF8C5A] border border-[#FFD8C7] flex-shrink-0">
                {listener.badge}
              </span>
            )}
          </div>
          <p className="text-xs text-[#666] mt-0.5 truncate">{listener.category}</p>
        </div>
      </div>
      <p className="text-xs sm:text-sm text-[#222] mt-3 sm:mt-4 leading-relaxed line-clamp-2 sm:line-clamp-3">
        {listener.description}
      </p>
    </div>
  );
}


