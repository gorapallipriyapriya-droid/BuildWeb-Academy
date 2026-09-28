import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { MessageSquare, ThumbsUp, Send, Plus, Search, User } from 'lucide-react';

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
    <div className="space-y-8 py-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400">
          <MessageSquare className="w-4 h-4" />
          <span>Student Community</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-1">
          Discussion Forum & Peer Help
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-3xl leading-relaxed">
          Ask questions about tricky coding concepts, discuss architectural trade-offs, get code review feedback from peers, and share your learning breakthroughs.
        </p>
      </div>

      {/* Control bar: Topic filter, Search, Ask Question */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl">
          {topics.map((t) => (
            <button
              key={t}
              onClick={() => setSelectedTopic(t)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition ${
                selectedTopic === t
                  ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search discussions..."
              className="pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white outline-none focus:border-blue-500 w-48 sm:w-64"
            />
          </div>

          <button
            onClick={() => setIsAsking(!isAsking)}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs shadow-xs"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Ask Question</span>
          </button>
        </div>
      </div>

      {/* Ask Question Form */}
      {isAsking && (
        <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">Start a Discussion</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="sm:col-span-2">
              <label className="text-slate-600 dark:text-slate-400 block mb-1">Question Title</label>
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="e.g. How does useMemo differ from useCallback?"
                className="w-full p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white outline-none"
              />
            </div>
            <div>
              <label className="text-slate-600 dark:text-slate-400 block mb-1">Category</label>
              <select
                value={newTopic}
                onChange={(e) => setNewTopic(e.target.value)}
                className="w-full p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white outline-none"
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
            <label className="text-slate-600 dark:text-slate-400 block mb-1">Details & Code Context</label>
            <textarea
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              placeholder="Describe what you tried, what you expected, and paste any error messages..."
              rows={4}
              className="w-full p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white outline-none leading-relaxed"
            />
          </div>
          <div className="flex justify-end gap-2 text-xs">
            <button
              onClick={() => setIsAsking(false)}
              className="px-3 py-1.5 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
            >
              Cancel
            </button>
            <button
              onClick={handlePostQuestion}
              className="px-4 py-1.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 shadow-xs"
            >
              Publish Question
            </button>
          </div>
        </div>
      )}

      {/* Discussion Threads List */}
      <div className="space-y-4">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="p-5 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-4"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="font-semibold text-blue-600 dark:text-blue-400 font-mono text-[10px]">
                    {post.topic}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>Posted by <strong className="text-slate-700 dark:text-slate-300">{post.author}</strong></span>
                  <span aria-hidden="true">·</span>
                  <span>{post.createdAt}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {post.title}
                </h3>
              </div>

              {/* Upvote button */}
              <button
                onClick={() => upvotePost(post.id)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 text-slate-700 dark:text-slate-300 text-xs font-mono font-medium transition"
              >
                <ThumbsUp className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span className="tabular-nums">{post.upvotes}</span>
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {post.content}
            </p>

            {/* Replies section */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
              <div className="text-xs font-semibold text-slate-500">
                {post.replies.length} {post.replies.length === 1 ? 'Answer' : 'Answers'}
              </div>

              {post.replies.map((reply) => (
                <div key={reply.id} className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-800 text-xs space-y-1.5">
                  <div className="flex justify-between items-center text-[11px] text-slate-400">
                    <span className="font-bold text-slate-700 dark:text-slate-300">{reply.author}</span>
                    <span>{reply.createdAt}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {reply.content}
                  </p>
                </div>
              ))}

              {/* Write Reply Trigger */}
              {activeReplyId === post.id ? (
                <div className="pt-2 space-y-2">
                  <textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Write a clear, supportive answer..."
                    rows={3}
                    className="w-full p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs outline-none leading-relaxed"
                  />
                  <div className="flex justify-end gap-2 text-xs">
                    <button
                      onClick={() => setActiveReplyId(null)}
                      className="px-3 py-1.5 text-slate-500"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => handleSendReply(post.id)}
                      className="flex items-center gap-1 px-3.5 py-1.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 shadow-xs"
                    >
                      <Send className="w-3 h-3" />
                      <span>Post Reply</span>
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setActiveReplyId(post.id)}
                  className="text-xs text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  + Write an Answer
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
