import { motion } from 'framer-motion';
import { Play as PlayIcon, Star as StarIcon } from 'lucide-react';

const MovieCard = ({ movie }) => {
    const {
        title = "Unknown Movie",
        year = "N/A",
        rating = "0",
        genres = [],
        medium_cover_image = "",
        torrents = []
    } = movie || {};

    const quality = torrents.length > 0 ? torrents[0].quality : "HD";
    const category = genres.slice(0, 2).join(", ");

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            className="group relative w-full bg-[#1a1c23] rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-[0_20px_50px_rgba(34,197,94,0.15)] border border-white/5"
        >
            <div className="relative aspect-[2/3] overflow-hidden">
                <motion.img
                    src={medium_cover_image}
                    alt={title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-[1px]"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/210x315?text=No+Poster' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c23] via-transparent to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
                <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="absolute top-2 right-2 bg-black/50 backdrop-blur-md px-2 py-1 rounded text-[9px] font-bold text-white tracking-widest border border-white/10 uppercase z-10"
                >
                    {quality}
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 opacity-0 group-hover:opacity-100">
                    <motion.div
                        initial={{ scale: 0.8 }}
                        whileHover={{ scale: 1 }}
                        className="w-16 h-16 bg-[#2d333f]/40 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-[#a3c9ff] shadow-2xl"
                    >
                        <PlayIcon size={24} fill="currentColor" className="ml-1" />
                    </motion.div>
                </div>
            </div>

            <div className="p-4 space-y-2 relative z-20">
                <div className="flex justify-between items-start gap-1">
                    <h3 className="text-white font-bold text-sm leading-tight group-hover:text-[#a3c9ff] transition-colors line-clamp-1">
                        {title}
                    </h3>
                    <div className="flex items-center gap-1 text-[#ffb800] shrink-0">
                        <StarIcon size={10} fill="currentColor" />
                        <span className="text-xs font-bold">{rating}</span>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-[10px] font-medium">
                    <span>{year}</span>
                    <span className="text-white/10">•</span>
                    <span className="line-clamp-1">{category}</span>
                </div>
                <div className="pt-1">
                    <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-blue-500 to-[#a3c9ff]"
                            initial={{ width: "0%" }}
                            whileHover={{ width: "100%" }}
                            transition={{ duration: 0.6 }}
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default MovieCard;