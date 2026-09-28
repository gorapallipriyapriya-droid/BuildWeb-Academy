import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { MessageSquare, ThumbsUp, Send, Plus, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ForumSection: React.FC = () => {
  const { forumPosts, addForumPost, addForumReply, upvotePost } = useApp();
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [activeReplyId, setActiveReplyId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState('');
  const [isAsking, setIsAsking] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newTopic, setNewTopic] = useState('CSS');
  const [newContent, setNewContent] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const topics = ['All', 'HTML', 'CSS', 'JavaScript', 'React', 'Backend'];

  const filteredPosts = forumPosts.filter((post) => {
    const matchesTopic = selectedTopic === 'All' || post.topic === selectedTopic;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTopic && matchesSearch;
  });

  const handlePostQuestion = () => {
    if (newTitle.trim() && newContent.trim()) {
      addForumPost(newTitle.trim(), newTopic, newContent.trim());
      setNewTitle('');
      setNewContent('');
      setIsAsking(false);
    }
  };

  const handleSendReply = (postId: string) => {
    if (replyText.trim()) {
      addForumReply(postId, replyText.trim());
      setReplyText('');
      setActiveReplyId(null);
    }
  };

  return (
    <div className="space-y-10 py-6">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18181B] text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
          <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
          <span>Student Community</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Discussion Forum & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">Peer Help</span>
        </h1>
        <p className="text-base text-zinc-400 mt-2 max-w-3xl leading-relaxed">
          Ask questions about tricky coding concepts, discuss architectural trade-offs, get code review feedback from peers, and share your learning breakthroughs.
        </p>
      </div>

      {/* Control bar: Topic filter, Search, Ask Question */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-1.5 p-1.5 bg-[#111111] rounded-2xl border border-white/[0.08]">
          {topics.map((t) => (
            <button
              key={t}
              onClick={() => setSelectedTopic(t)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all duration-200 cursor-pointer ${
                selectedTopic === t
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]'
                  : 'text-zinc-400 hover:text-white hover:bg-[#18181B]'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search discussions..."
              className="pl-9 pr-3 py-2 text-xs rounded-xl border border-white/[0.08] bg-[#111111] text-white placeholder-zinc-500 outline-none focus:border-blue-500 w-48 sm:w-64 transition"
            />
          </div>

          <button
            onClick={() => setIsAsking(!isAsking)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl btn-neon-primary text-xs font-bold transition cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Ask Question</span>
          </button>
        </div>
      </div>

      {/* Ask Question Form */}
      <AnimatePresence>
        {isAsking && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="p-6 sm:p-8 rounded-3xl border border-blue-500/40 bg-[#111111] shadow-[0_0_30px_rgba(59,130,246,0.15)] space-y-4 overflow-hidden"
          >
            <h3 className="text-lg font-bold text-white">Start a Discussion</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="sm:col-span-2">
                <label className="text-zinc-300 block mb-1 font-semibold">Question Title</label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. How does useMemo differ from useCallback?"
                  className="w-full p-2.5 rounded-xl border border-white/[0.1] bg-[#18181B] text-white outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-zinc-300 block mb-1 font-semibold">Category</label>
                <select
                  value={newTopic}
                  onChange={(e) => setNewTopic(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-white/[0.1] bg-[#18181B] text-white outline-none"
                >
                  <option value="HTML">HTML</option>
                  <option value="CSS">CSS</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="React">React</option>
                  <option value="Backend">Backend</option>
                </select>
              </div>
            </div>
            <div className="text-xs">
              <label className="text-zinc-300 block mb-1 font-semibold">Details & Code Context</label>
              <textarea
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                placeholder="Describe what you tried, what you expected, and paste any error messages..."
                rows={4}
                className="w-full p-3 rounded-xl border border-white/[0.1] bg-[#18181B] text-white outline-none leading-relaxed"
              />
            </div>
            <div className="flex justify-end gap-2 text-xs">
              <button
                onClick={() => setIsAsking(false)}
                className="px-4 py-2 text-zinc-400 hover:text-white transition cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handlePostQuestion}
                className="px-5 py-2 btn-neon-primary rounded-xl font-bold cursor-pointer"
              >
                Publish Question
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Discussion Threads List */}
      <div className="space-y-5">
        {filteredPosts.map((post) => (
          <motion.div
            key={post.id}
            whileHover={{ y: -2 }}
            className="p-6 sm:p-7 rounded-3xl border border-white/[0.08] bg-[#111111] shadow-[0_0_25px_rgba(0,0,0,0.6)] space-y-4 hover:border-white/20 transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <span className="font-bold text-cyan-400 font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-[#18181B] border border-cyan-500/20">
                    {post.topic}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>Posted by <strong className="text-white">{post.author}</strong></span>
                  <span aria-hidden="true">·</span>
                  <span>{post.createdAt}</span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  {post.title}
                </h3>
              </div>

              {/* Upvote button */}
              <button
                onClick={() => upvotePost(post.id)}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-white/[0.08] hover:border-blue-500/60 bg-[#18181B] text-zinc-300 hover:text-white text-xs font-mono font-bold transition shadow-xs cursor-pointer"
              >
                <ThumbsUp className="w-3.5 h-3.5 text-blue-400" />
                <span className="tabular-nums">{post.upvotes}</span>
              </button>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {post.content}
            </p>

            {/* Replies section */}
            <div className="pt-4 border-t border-white/[0.08] space-y-3">
              <div className="text-xs font-semibold text-zinc-400">
                {post.replies.length} {post.replies.length === 1 ? 'Answer' : 'Answers'}
              </div>

              {post.replies.map((reply) => (
                <div key={reply.id} className="p-4 rounded-2xl bg-[#18181B] border border-white/[0.06] text-xs space-y-1.5">
                  <div className="flex justify-between items-center text-[11px] text-zinc-400">
                    <span className="font-bold text-white">{reply.author}</span>
                    <span>{reply.createdAt}</span>
                  </div>
                  <p className="text-zinc-300 leading-relaxed">
                    {reply.content}
                  </p>
                </div>
              ))}

              {/* Write Reply Trigger */}
              {activeReplyId === post.id ? (
                <div className="pt-2 space-y-2.5">
                  <textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Write a clear, supportive answer..."
                    rows={3}
                    className="w-full p-3 rounded-xl border border-white/[0.1] bg-[#18181B] text-white text-xs outline-none leading-relaxed"
                  />
                  <div className="flex justify-end gap-2 text-xs">
                    <button
                      onClick={() => setActiveReplyId(null)}
                      className="px-3.5 py-1.5 text-zinc-400 hover:text-white transition cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => handleSendReply(post.id)}
                      className="flex items-center gap-1.5 px-4 py-1.5 btn-neon-primary rounded-xl font-bold transition cursor-pointer"
                    >
                      <Send className="w-3 h-3" />
                      <span>Post Reply</span>
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setActiveReplyId(post.id)}
                  className="text-xs text-cyan-400 hover:underline font-semibold cursor-pointer"
                >
                  + Write an Answer
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
