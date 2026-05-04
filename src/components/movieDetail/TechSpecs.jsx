import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { SectionTitle } from './MovieInfo';

const SpecCard = ({ label, value }) => (
    <div className="bg-[#1e2029] border border-white/5 rounded-xl p-4">
        <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">{label}</p>
        <p className="text-white font-bold text-sm">{value || 'N/A'}</p>
    </div>
);

const TechSpecs = ({ torrents, runtime }) => {
    const [activeTorrent, setActiveTorrent] = useState(0);

    if (!torrents?.length) return null;

    const formatRuntime = (mins) => {
        if (!mins) return 'N/A';
        return `${Math.floor(mins / 60)}h ${mins % 60}m`;
    };

    const getResolution = (quality) => {
        const map = {
            '720p': '1280 x 720',
            '1080p': '1920 x 1080',
            '2160p': '3840 x 2160'
        };
        return map[quality] || quality;
    };

    const active = torrents[activeTorrent];

    return (
        <div className="mb-8">
            <SectionTitle title="Tech Specs" />

            {/* Quality Tabs */}
            <div className="flex gap-2 mb-5 flex-wrap">
                {torrents.map((t, i) => (
                    <button
                        key={i}
                        onClick={() => setActiveTorrent(i)}
                        className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all border ${
                            activeTorrent === i
                                ? 'bg-[#a3c9ff] text-[#101419] border-[#a3c9ff]'
                                : 'bg-[#1e2029] text-gray-400 border-white/10 hover:border-[#a3c9ff]/40'
                        }`}
                    >
                        {t.quality}.{t.type?.toUpperCase()}
                    </button>
                ))}
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                <SpecCard label="File Size" value={active.size} />
                <SpecCard label="Resolution" value={getResolution(active.quality)} />
                <SpecCard label="Audio" value={`AAC ${active.audio_channels}`} />
                <SpecCard label="Video Codec" value={active.video_codec} />
                <SpecCard label="Seeds" value={active.seeds} />
                <SpecCard label="Peers" value={active.peers} />
                <SpecCard label="Type" value={active.type?.toUpperCase()} />
                <SpecCard label="Length" value={formatRuntime(runtime)} />
            </div>

            {/* Download Button */}
            <a
                href={active.url}
                className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 bg-[#22c55e]/10 hover:bg-[#22c55e]/20 border border-[#22c55e]/30 text-[#22c55e] rounded-xl text-sm font-semibold transition-all"
            >
                <Download size={16} />
                Download {active.quality} — {active.size}
            </a>
        </div>
    );
};

export default TechSpecs;
