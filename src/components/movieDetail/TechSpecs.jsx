import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from './MovieInfo';

const TechSpecs = ({ torrents, runtime }) => {
    const [active, setActive] = useState(0);

    if (!torrents?.length) return null;

    const formatRuntime = (mins) => {
        if (!mins) return 'N/A';
        return `${Math.floor(mins / 60)}h ${mins % 60}m`;
    };

    const getResolution = (q) => ({ '720p': '1280 x 720', '1080p': '1920 x 1080', '2160p': '3840 x 2160' }[q] || q);

    const t = torrents[active];

    const specs = [
        { label: 'FILESIZE',   value: t.size },
        { label: 'RESOLUTION', value: getResolution(t.quality) },
        { label: 'AUDIO',      value: `AAC ${t.audio_channels}` },
        { label: 'FPS',        value: '24 fps' },
        { label: 'LENGTH',     value: formatRuntime(runtime) },
    ];

    return (
        <div className="mb-8">
            <SectionTitle title="Tech Specs" />

            {/* Tabs */}
            <div className="flex gap-2 mb-4 flex-wrap">
                {torrents.map((tor, i) => (
                    <button key={i} onClick={() => setActive(i)}
                        className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                            active === i
                                ? 'bg-[#a3c9ff] text-[#0d1117] border-[#a3c9ff]'
                                : 'bg-transparent text-gray-400 border-white/10 hover:border-[#a3c9ff]/30 hover:text-[#a3c9ff]'
                        }`}
                    >
                        {tor.quality}.{tor.type?.toUpperCase()}
                    </button>
                ))}
            </div>

            {/* Specs Table — exactly like reference */}
            <AnimatePresence mode="wait">
                <motion.div key={active}
                    initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="bg-[#141920] border border-white/5 rounded-xl p-5"
                >
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-6">
                        {specs.map((s, i) => (
                            <div key={i}>
                                <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">{s.label}</p>
                                <p className="text-white text-sm font-bold">{s.value}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Download */}
            <motion.a href={t.url} whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-[#22c55e]/10 hover:bg-[#22c55e]/20 border border-[#22c55e]/30 hover:border-[#22c55e]/60 text-[#22c55e] rounded-xl text-sm font-bold transition-all"
            >
                <Download size={15} />
                Download {t.quality} — {t.size}
            </motion.a>
        </div>
    );
};

export default TechSpecs;