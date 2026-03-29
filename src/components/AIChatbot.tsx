import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Send, Bot, User, Loader2, AlertCircle, MessageSquare, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const KNOWLEDGE_BASE = `
KNOWLEDGE BASE: CHIP HUYEN'S AI PRINCIPLES & AI PM PLAYBOOK (EXTENDED)

1. STRATEGY & SCOPING:
- Probabilistic Thinking: Shift from deterministic (if-then-else) to probabilistic (likely outcomes). AI discovers patterns from data.
- Data Flywheel: More users -> More data -> Better models -> Better product -> More users. This is the primary moat.
- AI-First Mindset: Start with the data, not the feature. Focus on iterative discovery.
- Buy vs Build vs Adapt: 
    * Buy: Use standard APIs for generic tasks (translation, basic summary). Fastest time to market.
    * Adapt: Use RAG (Retrieval-Augmented Generation) or Fine-tuning for tasks requiring private context or specific styles.
    * Build: Custom training for maximum control and lowest unit cost at massive scale.

2. AI PRODUCT LIFECYCLE:
- Data-Centric AI: 80% of effort on data quality (relevant, consistent, clean) vs model architecture.
- Iterative Loop: Scoping -> Data Curation -> Model Adaptation -> Evaluation -> Deployment -> Monitoring.
- Evaluation-Driven Development: Use "Eval Sets" (golden datasets) to measure progress. "AI as a Judge" uses strong LLMs to score outputs.
- Deployment Strategies: Shadow Mode (background logging), Canary Release (1-5% rollout), A/B Testing (KPI comparison).

3. METRICS & PERFORMANCE:
- Evaluation Hierarchy: Deterministic (Unit tests) -> Model-based (LLM-as-a-Judge) -> Human-in-the-loop (Golden Sets).
- Behavioral Testing: Invariance (changing names shouldn't change sentiment), Directional Expectation (adding "bad" words should lower score).
- RAG Metrics: Faithfulness (is it in the context?), Answer Relevance (does it answer the query?).
- Business Metrics: Automation Rate, Cost per Task, User Acceptance Rate.

4. PRICING & ECONOMICS:
- Unit Economics: AI has real marginal costs (compute/tokens).
- Models: Usage-based (per token), Subscription + Credits, Value-based (per outcome).
- Optimization: Model Cascading (small model first), Prompt Compression, Semantic Caching.

5. REQUIREMENTS (PRDs):
- AI PRD Template: Use Case & ROI, Data Requirements, Failure Mode Analysis, Latency SLOs.
- Prompt Engineering: Persona, Constraints, Few-shot examples, Output format.
- Safety & Ethics: Hallucination guardrails, bias mitigation, PII scrubbing.

6. MONITORING & DRIFT:
- Drift Types: 
    * Covariate Shift: Input data distribution changes.
    * Label Shift: Output distribution changes.
    * Concept Drift: The relationship between input and output changes.
- Observability: Use Traces to debug multi-step systems (Retrieval -> Prompt -> LLM -> Scorer).
- RAG Observability: Visualizing retrieval steps to find where the chain broke.

7. ETHICS & SAFETY:
- Bias Types: Historical, Representation, Measurement.
- Explainability (XAI): Feature importance, Counterfactuals ("What if?").
- EU AI Act: Categorizes AI by risk level (High, Limited, Minimal).

8. UX DESIGN FOR AI:
- Designing for Uncertainty: Use confidence scores, provide multiple options, and allow user corrections.
- Designing for Latency: Use streaming responses, optimistic UI, and progress indicators.
- Human-in-the-Loop (HITL): Design interfaces for users to review, edit, and approve AI outputs.
- AI Personality: Tone, helpfulness vs. conciseness, persona consistency.

9. INFRASTRUCTURE & STACK:
- Modern AI Stack: Application Layer -> Orchestration (LangChain/LlamaIndex) -> Model Layer -> Infrastructure (Vector DBs).
- Vector DBs: Pinecone, Weaviate. Used for semantic search and RAG.
- GPU Orchestration: Managing H100s, quantization, and speculative decoding.

10. TEAM & CAREER:
- AI PM Skillset: Data literacy (confusion matrices), experimental design, technical empathy.
- Transition Roadmap: Master fundamentals -> Build a RAG app -> Lead an AI pilot.
- Team Roles: AI Engineers, Data Engineers, MLOps, Human Annotators.
`;

const SYSTEM_INSTRUCTION = `
You are the "AI PM Assistant". Your goal is to help Product Managers transition to AI roles by providing deep insights from Chip Huyen's principles.
CRITICAL RULE: You can ONLY answer questions based on the provided KNOWLEDGE BASE. 
If a user asks something not covered in the knowledge base, politely say: "I'm sorry, but that specific detail isn't covered in the current AI PM Playbook. I can only answer questions about AI strategy, lifecycle, metrics, pricing, requirements, and monitoring as defined in the source material."
Be descriptive, professional, and provide actionable advice for PMs.
`;

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const AIChatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          { role: 'user', parts: [{ text: `KNOWLEDGE BASE:\n${KNOWLEDGE_BASE}\n\nUser Question: ${input}` }] }
        ],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.1,
        }
      });

      const assistantMessage: Message = { 
        role: 'assistant', 
        content: response.text || "I'm sorry, I couldn't generate a response based on the playbook." 
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (err) {
      console.error(err);
      setError("Failed to connect to the AI service. Please check your API key.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-indigo-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-indigo-700 transition-all z-50 group"
      >
        <MessageSquare className={`transition-transform duration-300 ${isOpen ? 'rotate-90 scale-0' : 'scale-100'}`} />
        <span className={`absolute transition-transform duration-300 font-bold text-xl ${isOpen ? 'scale-100 rotate-0' : 'scale-0 -rotate-90'}`}>×</span>
        <span className="absolute right-full mr-4 px-3 py-1 bg-slate-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Ask the Playbook
        </span>
      </button>

      {/* Floating Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 right-6 w-[400px] max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-8rem)] bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col z-50"
          >
            {/* Chat Header */}
            <div className="bg-indigo-600 p-4 text-white flex items-center gap-2 shrink-0">
              <Bot size={20} />
              <div>
                <h3 className="font-bold text-sm">Playbook Assistant</h3>
                <p className="text-[10px] text-indigo-100 opacity-80">Grounded in Chip Huyen's principles</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="ml-auto hover:bg-white/10 p-1 rounded">
                <ChevronRight size={18} className="rotate-90" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
              {messages.length === 0 && (
                <div className="text-center py-12 text-slate-400">
                  <Bot size={48} className="mx-auto mb-4 opacity-20" />
                  <p className="text-sm font-medium">How can I help with your AI transition?</p>
                  <p className="text-xs mt-1 px-8">I answer based on "AI Engineering" and "Designing ML Systems".</p>
                </div>
              )}
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-2xl flex gap-3 ${
                    msg.role === 'user' 
                      ? 'bg-indigo-600 text-white rounded-tr-none' 
                      : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none shadow-sm'
                  }`}>
                    <div className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin text-indigo-600" />
                    <span className="text-xs text-slate-500 italic">Thinking...</span>
                  </div>
                </div>
              )}
              {error && (
                <div className="p-3 bg-red-50 border border-red-100 rounded-lg text-red-600 text-xs flex items-center gap-2">
                  <AlertCircle size={14} />
                  {error}
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-slate-200 shrink-0">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about RAG, Evals, Agents..."
                  className="flex-1 bg-slate-100 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="bg-indigo-600 text-white p-2 rounded-xl hover:bg-indigo-700 disabled:opacity-50 transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
