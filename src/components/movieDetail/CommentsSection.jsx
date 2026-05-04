import React, { useState } from 'react';
import { MessageSquare, Star, ThumbsUp, ThumbsDown } from 'lucide-react';
import { motion } from 'framer-motion';

const dummyComments = [
    {
        id: 1,
        user: 'StarFreak2024',
        initials: 'SF',
        date: 'May 31, 2024',
        text: 'A breathtaking visual masterpiece. The sound design in Atmos is incredible.',
        likes: 24,
        dislikes: 2,
    },
    {
        id: 2,
        user: 'CinemaLover',
        initials: 'CL',
        date: 'June 3, 2024',
        text: 'One of the best movies I have seen this year. Highly recommended!',
        likes: 18,
        dislikes: 1,
    }
];

const CommentsSection = () => {
    const [activeTab, setActiveTab] = useState('comments');

    return (
        <div className="mt-8">
            {/* Tabs */}
            <div className="flex items-center gap-6 border-b border-white/10 mb-5">
                <button
                    onClick={() => setActiveTab('comments')}
                    className={`flex items-center gap-2 pb-3 text-sm font-semibold transition-all border-b-2 -mb-px ${
                        activeTab === 'comments'
                            ? 'text-white border-[#22c55e]'
                            : 'text-gray-500 border-transparent hover:text-gray-300'
                    }`}
                >
                    <MessageSquare size={14} />
                    {dummyComments.length} Comments
                </button>
                <button
                    onClick={() => setActiveTab('reviews')}
                    className={`flex items-center gap-2 pb-3 text-sm font-semibold transition-all border-b-2 -mb-px ${
                        activeTab === 'reviews'
                            ? 'text-white border-[#22c55e]'
                            : 'text-gray-500 border-transparent hover:text-gray-300'
                    }`}
                >
                    <Star size={14} />
                    Movie Reviews
                </button>
            </div>

            {activeTab === 'comments' && (
                <div className="space-y-3">
                    {dummyComments.map((comment, i) => (
                        <motion.div
                            key={comment.id}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.08 }}
                            className="flex gap-3 bg-[#141920] border border-white/5 rounded-xl p-4 hover:border-white/10 transition-all"
                        >
                            {/* ✅ Avatar — initials based, small size */}
                            <div className="w-8 h-8 rounded-full bg-[#22c55e]/20 border border-[#22c55e]/30 flex items-center justify-center shrink-0">
                                <span className="text-[#22c55e] text-xs font-black">{comment.initials}</span>
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-2 mb-1.5">
                                    <div className="flex items-center gap-2">
                                        <span className="text-white text-xs font-bold">{comment.user}</span>
                                        <span className="text-gray-600 text-[11px]">{comment.date}</span>
                                    </div>
                                    <div className="flex items-center gap-3 shrink-0">
                                        <button className="flex items-center gap-1 text-gray-500 hover:text-[#22c55e] transition-colors text-xs">
                                            <ThumbsUp size={11} />
                                            <span>{comment.likes}</span>
                                        </button>
                                        <button className="flex items-center gap-1 text-gray-500 hover:text-red-400 transition-colors text-xs">
                                            <ThumbsDown size={11} />
                                            <span>{comment.dislikes}</span>
                                        </button>
                                    </div>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">{comment.text}</p>
                            </div>
                        </motion.div>
                    ))}

                    {/* Login Button */}
                    <motion.button
                        whileHover={{ backgroundColor: '#1e263a' }}
                        className="w-full py-3.5 bg-[#141920] border border-white/10 hover:border-[#a3c9ff]/20 rounded-xl text-gray-400 hover:text-white text-sm font-semibold transition-all duration-200"
                    >
                        Login to leave a comment
                    </motion.button>
                </div>
            )}

            {activeTab === 'reviews' && (
                <div className="text-center py-10 text-gray-600">
                    <Star size={28} className="mx-auto mb-3 opacity-20" />
                    <p className="text-sm">No reviews yet. Be the first!</p>
                </div>
            )}
        </div>
    );
};

export default CommentsSection;