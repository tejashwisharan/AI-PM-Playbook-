/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Brain, 
  BarChart3, 
  DollarSign, 
  FileText, 
  Activity, 
  Zap, 
  ShieldCheck, 
  RefreshCcw,
  ChevronRight,
  Target,
  Layers,
  Database,
  Users,
  AlertTriangle,
  MessageSquare,
  TrendingUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AIChatbot } from './components/AIChatbot';

type Tab = 'strategy' | 'lifecycle' | 'metrics' | 'pricing' | 'requirements' | 'monitoring' | 'ethics' | 'ux' | 'infra' | 'legal' | 'team';

const TabButton = ({ active, onClick, icon: Icon, label }: { active: boolean, onClick: () => void, icon: any, label: string }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all ${
      active 
        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' 
        : 'text-slate-600 hover:bg-slate-100'
    }`}
  >
    <Icon size={20} />
    <span className="font-medium">{label}</span>
  </button>
);

const Card = ({ title, icon: Icon, children, color = "indigo" }: { title: string, icon: any, children: React.ReactNode, color?: string }) => (
  <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow h-full">
    <div className="flex items-center gap-3 mb-4">
      <div className={`p-2 rounded-lg bg-${color}-50 text-${color}-600`}>
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
    </div>
    <div className="text-slate-600 space-y-3 text-sm leading-relaxed">
      {children}
    </div>
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('strategy');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-2 rounded-lg text-white">
              <Brain size={24} />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-indigo-950">AI PM Playbook</h1>
          </div>
          <div className="text-sm text-slate-500 font-medium hidden sm:block">
            Distilled from "AI Engineering" & "Designing ML Systems"
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation */}
        <nav className="flex flex-wrap gap-2 mb-8 p-1 bg-white rounded-xl border border-slate-200 shadow-sm overflow-x-auto">
          <TabButton active={activeTab === 'strategy'} onClick={() => setActiveTab('strategy')} icon={Target} label="Strategy" />
          <TabButton active={activeTab === 'lifecycle'} onClick={() => setActiveTab('lifecycle')} icon={RefreshCcw} label="Lifecycle" />
          <TabButton active={activeTab === 'metrics'} onClick={() => setActiveTab('metrics')} icon={BarChart3} label="Metrics" />
          <TabButton active={activeTab === 'pricing'} onClick={() => setActiveTab('pricing')} icon={DollarSign} label="Pricing" />
          <TabButton active={activeTab === 'requirements'} onClick={() => setActiveTab('requirements')} icon={FileText} label="Requirements" />
          <TabButton active={activeTab === 'monitoring'} onClick={() => setActiveTab('monitoring')} icon={Activity} label="Monitoring" />
          <TabButton active={activeTab === 'ethics'} onClick={() => setActiveTab('ethics')} icon={ShieldCheck} label="Ethics & Safety" />
          <TabButton active={activeTab === 'ux'} onClick={() => setActiveTab('ux')} icon={Users} label="UX & Design" />
          <TabButton active={activeTab === 'infra'} onClick={() => setActiveTab('infra')} icon={Layers} label="Infrastructure" />
          <TabButton active={activeTab === 'legal'} onClick={() => setActiveTab('legal')} icon={AlertTriangle} label="Legal & Compliance" />
          <TabButton active={activeTab === 'team'} onClick={() => setActiveTab('team')} icon={Users} label="Team & Career" />
        </nav>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'strategy' && (
              <div className="space-y-8">
                <section className="prose prose-slate max-w-none">
                  <h2 className="text-3xl font-bold text-indigo-950 mb-4">Strategic Thinking for AI Products</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Transitioning from a traditional PM to an AI PM requires a fundamental shift in mindset: moving from <strong>deterministic logic</strong> (if-then-else) to <strong>probabilistic systems</strong>. In traditional software, you define the rules. In AI, you define the goals and the data, and the system learns the patterns.
                  </p>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card title="AI-Native vs. AI-Added" icon={Target}>
                    <p>Is AI the core value proposition (AI-Native) or a feature enhancement (AI-Added)?</p>
                    <div className="space-y-4 mt-4">
                      <div className="p-3 bg-indigo-50 rounded-xl">
                        <h4 className="font-bold text-indigo-900 text-sm">AI-Native (The Disruptors)</h4>
                        <p className="text-xs">Products that couldn't exist without AI (e.g., Midjourney, Perplexity). The UX is built around the model's capabilities.</p>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-xl">
                        <h4 className="font-bold text-slate-900 text-sm">AI-Added (The Incumbents)</h4>
                        <p className="text-xs">Existing products adding AI features (e.g., Notion AI, Adobe Firefly). The goal is to reduce friction in existing workflows.</p>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-100 text-[10px] text-amber-800 italic">
                      <strong>PM Tip:</strong> Incumbents have the data; startups have the speed. If you're a startup, you must find a "Data Moat" that incumbents can't easily replicate.
                    </div>
                  </Card>

                  <Card title="The AI Moat Pyramid" icon={ShieldCheck} color="emerald">
                    <p>Defensibility in AI is a multi-layered strategy. Foundation models are commodities; your moat is what's on top.</p>
                    <div className="space-y-2 mt-4 text-xs">
                      <div className="flex justify-between items-center p-2 bg-emerald-100 rounded text-emerald-900 font-bold">
                        <span>Layer 4: Proprietary Data Flywheel</span>
                        <span className="text-[8px] bg-emerald-200 px-1 rounded">Strongest</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-emerald-50 rounded text-emerald-800">
                        <span>Layer 3: Workflow Integration & UX</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-slate-100 rounded text-slate-700">
                        <span>Layer 2: Fine-tuned Models / RAG</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-slate-200 rounded text-slate-500">
                        <span>Layer 1: Foundation Model APIs</span>
                        <span className="text-[8px] bg-slate-300 px-1 rounded text-slate-600">Weakest</span>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card title="Data Strategy: The Fuel" icon={Database} color="blue">
                    <p>AI products live and die by their data strategy. You need a plan for acquisition, labeling, and synthesis.</p>
                    <ul className="list-disc pl-5 space-y-2 text-xs">
                      <li><strong>Data Acquisition:</strong> Partnerships, public scraping (legal risks), or user-generated content.</li>
                      <li><strong>Data Labeling:</strong> Human-in-the-loop (HITL), programmatic labeling (Snorkel), or LLM-as-a-labeler.</li>
                      <li><strong>Synthetic Data:</strong> Using models to generate training data for other models (e.g., training a small model on GPT-4 outputs).</li>
                    </ul>
                  </Card>
                  <Card title='The "Buy vs. Build" Nuance' icon={Layers} color="orange">
                    <p>It's no longer a binary choice. Most successful AI products use a hybrid approach.</p>
                    <div className="space-y-2 mt-2 text-xs">
                      <p><strong>Tier 1:</strong> Use standard APIs for generic tasks (translation, basic summary).</p>
                      <p><strong>Tier 2:</strong> Use RAG (Retrieval-Augmented Generation) for tasks requiring private context.</p>
                      <p><strong>Tier 3:</strong> Fine-tune open-source models (Llama 3) for specific styles, formats, or cost optimization.</p>
                    </div>
                  </Card>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                  <h3 className="text-xl font-bold mb-6 text-indigo-950 flex items-center gap-2">
                    <Layers className="text-indigo-600" />
                    The Buy vs. Build vs. Adapt Spectrum
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-5 rounded-xl bg-slate-50 border border-slate-100">
                      <h4 className="font-bold text-indigo-700 mb-2">Buy (APIs)</h4>
                      <p className="text-xs text-slate-600 mb-4">Fastest time to market. Low upfront cost. No ML expertise required.</p>
                      <ul className="text-[10px] space-y-1 text-slate-500">
                        <li>✅ Rapid Prototyping</li>
                        <li>❌ High variable cost</li>
                        <li>❌ No data privacy control</li>
                      </ul>
                    </div>
                    <div className="p-5 rounded-xl bg-indigo-50 border border-indigo-100">
                      <h4 className="font-bold text-indigo-700 mb-2">Adapt (Fine-tuning/RAG)</h4>
                      <p className="text-xs text-slate-600 mb-4">The "Sweet Spot." Customize foundation models with your data.</p>
                      <ul className="text-[10px] space-y-1 text-slate-500">
                        <li>✅ Better performance on niche tasks</li>
                        <li>✅ Reduced latency vs large APIs</li>
                        <li>❌ Requires data engineering</li>
                      </ul>
                    </div>
                    <div className="p-5 rounded-xl bg-slate-50 border border-slate-100">
                      <h4 className="font-bold text-indigo-700 mb-2">Build (Custom Training)</h4>
                      <p className="text-xs text-slate-600 mb-4">Maximum control. Lowest unit cost at massive scale.</p>
                      <ul className="text-[10px] space-y-1 text-slate-500">
                        <li>✅ Full IP ownership</li>
                        <li>❌ Massive compute cost</li>
                        <li>❌ Requires deep ML research team</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'lifecycle' && (
              <div className="space-y-8">
                <section className="prose prose-slate max-w-none">
                  <h2 className="text-3xl font-bold text-indigo-950 mb-4">The AI Product Lifecycle</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    AI development is <strong>experimental</strong>. Unlike traditional software where you "build the feature," in AI you "discover the performance." The lifecycle is a loop of data curation, model adaptation, and rigorous evaluation.
                  </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card title="Phase 1: Exploration" icon={Target}>
                    <p className="text-xs">Feasibility testing. Can the model even do this? Use "Wizard of Oz" testing or manual prompting to find the baseline.</p>
                  </Card>
                  <Card title="Phase 2: Evaluation-Driven Dev" icon={ShieldCheck} color="green">
                    <p className="text-xs">Build your "Eval Set" before you build the model. If you can't measure it, you can't improve it. Use LLM-as-a-Judge for scale.</p>
                  </Card>
                  <Card title="Phase 3: Productionization" icon={RefreshCcw} color="blue">
                    <p className="text-xs">Optimization for cost, latency, and safety. Moving from a single prompt to a robust pipeline or agentic workflow.</p>
                  </Card>
                </div>

                <div className="relative">
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-indigo-100 hidden md:block"></div>
                  <div className="space-y-12">
                    {[
                      { 
                        step: "01", 
                        title: "Problem Scoping & ROI", 
                        content: "Define the 'Usefulness Threshold.' At what accuracy level does this feature become valuable? If a summary is 70% accurate, is it helpful or dangerous?",
                        icon: Target
                      },
                      { 
                        step: "02", 
                        title: "Data Curation (The Real Work)", 
                        content: "AI is 80% data. You need to identify, clean, and label data. Use 'Active Learning' to focus labeling efforts on samples where the model is most confused.",
                        icon: Database
                      },
                      { 
                        step: "03", 
                        title: "Model Selection & Adaptation", 
                        content: "Choose between LLM APIs, open-source models (Llama, Mistral), or custom architectures. Use RAG (Retrieval-Augmented Generation) for factual tasks and Fine-tuning for style/format.",
                        icon: Zap
                      },
                      { 
                        step: "04", 
                        title: "Evaluation (The Compass)", 
                        content: "Build an 'Eval Set'—a golden dataset of inputs and expected outputs. Use 'AI as a Judge' (LLM-based evaluation) to scale your testing.",
                        icon: ShieldCheck
                      },
                      { 
                        step: "05", 
                        title: "Deployment & Feedback", 
                        content: "Start with 'Shadow Mode' (run AI in background without showing users). Collect implicit feedback (did they edit the AI output?) to improve the next version.",
                        icon: RefreshCcw
                      }
                    ].map((item, i) => (
                      <div key={i} className="relative flex flex-col md:flex-row gap-8 items-start">
                        <div className="z-10 w-16 h-16 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold text-xl shadow-lg shrink-0">
                          {item.step}
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex-1">
                          <h4 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                            <item.icon size={20} className="text-indigo-600" />
                            {item.title}
                          </h4>
                          <p className="text-slate-600 leading-relaxed">{item.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card title="Data-Centric AI" icon={Database}>
                    <p>The "Data-Centric" shift means spending 80% of your time on <strong>Data Quality</strong> rather than model architecture.</p>
                    <div className="p-3 bg-slate-50 rounded-lg text-xs space-y-1">
                      <div className="font-bold">Quality Characteristics:</div>
                      <div>Relevant, Aligned, Consistent, Correctly Formatted, Unique, Compliant.</div>
                    </div>
                    <div className="mt-4 p-3 bg-indigo-50 rounded-lg border border-indigo-100 text-[10px] text-indigo-800 italic">
                      <strong>PM Tip:</strong> "Garbage In, Garbage Out." If your labels are noisy, your model will be noisy. Invest in high-quality human labeling for your golden eval set.
                    </div>
                  </Card>
                  <Card title="The Last Mile Challenge" icon={AlertTriangle} color="red">
                    <p>Getting from 0 to 80% is easy with foundation models. The "Last Mile" (80% to 100%) is where most projects fail. It requires:</p>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li>Rigorous evaluation pipelines.</li>
                      <li>Handling edge cases (rare occurrences).</li>
                      <li>Addressing hallucinations and inconsistency.</li>
                    </ul>
                    <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-100 text-[10px] text-red-800 italic">
                      <strong>PM Tip:</strong> Don't promise 100% accuracy. Set user expectations for a probabilistic system and build fallbacks for when it fails.
                    </div>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === 'metrics' && (
              <div className="space-y-8">
                <section className="prose prose-slate max-w-none">
                  <h2 className="text-3xl font-bold text-indigo-950 mb-4">AI Metrics & Evaluation</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    In AI, "it works" is not a binary state. You must measure <strong>Quality</strong>, <strong>System Performance</strong>, and <strong>Business Impact</strong> simultaneously. Traditional metrics like DAU still matter, but AI requires a new layer of "Probabilistic Observability."
                  </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card title="The Evaluation Hierarchy" icon={BarChart3}>
                    <div className="space-y-4 mt-2">
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <h4 className="font-bold text-slate-900 text-sm">1. Ground Truth (Deterministic)</h4>
                        <p className="text-xs mt-1">Exact match, F1 Score, Precision/Recall. Best for classification, extraction, or code generation where there's a "right" answer.</p>
                      </div>
                      <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                        <h4 className="font-bold text-indigo-900 text-sm">2. Semantic Similarity</h4>
                        <p className="text-xs mt-1">Cosine similarity, BERTScore. Does the meaning match, even if words differ? Essential for summarization and translation.</p>
                      </div>
                      <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                        <h4 className="font-bold text-emerald-900 text-sm">3. LLM-as-a-Judge</h4>
                        <p className="text-xs mt-1">Using a stronger model (e.g., GPT-4o) to grade a smaller model's output based on a rubric. Scales evaluation where humans are too slow.</p>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-indigo-50 rounded-lg border border-indigo-100 text-[10px] text-indigo-800 italic">
                      <strong>PM Tip:</strong> Always look at the "PR Curve" (Precision-Recall). It helps you choose the right threshold for your specific use case.
                    </div>
                  </Card>

                  <Card title="Behavioral & Adversarial Testing" icon={ShieldCheck} color="red">
                    <p className="text-xs">Don't just test the average case. Test the edges and the "bad actors."</p>
                    <div className="space-y-3 mt-4">
                      <div className="p-3 bg-red-50 rounded-lg border border-red-100">
                        <h4 className="font-bold text-red-900 text-xs">Invariance Testing</h4>
                        <p className="text-[10px]">Changing "he" to "she" or "New York" to "London" shouldn't change the model's core recommendation or logic.</p>
                      </div>
                      <div className="p-3 bg-red-50 rounded-lg border border-red-100">
                        <h4 className="font-bold text-red-900 text-xs">Directional Expectation</h4>
                        <p className="text-[10px]">Adding more positive keywords should increase the sentiment score. Adding more constraints should narrow the output.</p>
                      </div>
                      <div className="p-3 bg-red-50 rounded-lg border border-red-100">
                        <h4 className="font-bold text-red-900 text-xs">Red Teaming</h4>
                        <p className="text-[10px]">Actively trying to make the model hallucinate, leak PII, or bypass safety filters using "jailbreak" prompts.</p>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card title="RAG Metrics (The Triad)" icon={Database} color="blue">
                    <div className="space-y-2 text-[10px]">
                      <p><strong>Context Precision:</strong> Is the retrieved info relevant to the query?</p>
                      <p><strong>Faithfulness:</strong> Is the answer derived ONLY from the context (no hallucination)?</p>
                      <p><strong>Answer Relevance:</strong> Does it actually answer the user's question?</p>
                    </div>
                  </Card>
                  <Card title="Business Impact" icon={TrendingUp} color="emerald">
                    <div className="space-y-2 text-[10px]">
                      <p><strong>Automation Rate:</strong> % of tasks completed without human intervention.</p>
                      <p><strong>Cost per Task:</strong> Total compute cost to achieve a successful user goal.</p>
                      <p><strong>Time Saved:</strong> Difference in task completion time (AI vs. Manual).</p>
                    </div>
                  </Card>
                  <Card title="User Feedback" icon={Users} color="orange">
                    <div className="space-y-2 text-[10px]">
                      <p><strong>Explicit:</strong> Thumbs up/down, star ratings.</p>
                      <p><strong>Implicit:</strong> Copy-paste rate, "Regenerate" clicks, edit distance on AI output.</p>
                    </div>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === 'pricing' && (
              <div className="space-y-8">
                <section className="prose prose-slate max-w-none">
                  <h2 className="text-3xl font-bold text-indigo-950 mb-4">AI Pricing & Unit Economics</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    AI features are expensive. Unlike traditional software where the marginal cost of a new user is near zero, every AI request has a <strong>real compute cost</strong>. Your pricing must reflect this "Cost of Intelligence."
                  </p>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card title="Pricing Models for AI" icon={DollarSign}>
                    <div className="space-y-4">
                      <div className="flex gap-4 p-4 hover:bg-slate-50 rounded-xl transition-colors cursor-default">
                        <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center shrink-0 font-bold">1</div>
                        <div>
                          <h4 className="font-bold text-slate-800">Token-Based (Usage)</h4>
                          <p className="text-xs text-slate-500">Charge per 1k tokens. Direct alignment with COGS. Best for APIs and developer tools.</p>
                        </div>
                      </div>
                      <div className="flex gap-4 p-4 hover:bg-slate-50 rounded-xl transition-colors cursor-default">
                        <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center shrink-0 font-bold">2</div>
                        <div>
                          <h4 className="font-bold text-slate-800">Subscription + Credits</h4>
                          <p className="text-xs text-slate-500">Fixed monthly fee includes X credits. Users can buy more. Predictable revenue with cost protection.</p>
                        </div>
                      </div>
                      <div className="flex gap-4 p-4 hover:bg-slate-50 rounded-xl transition-colors cursor-default">
                        <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center shrink-0 font-bold">3</div>
                        <div>
                          <h4 className="font-bold text-slate-800">Outcome-Based</h4>
                          <p className="text-xs text-slate-500">Charge per successful task (e.g., $5 per booked meeting). High value, but requires robust success tracking.</p>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card title="Cost Optimization (COGS)" icon={Zap} color="orange">
                    <p className="mb-4 text-xs">As a PM, you must work with engineering to lower the <strong>Cost of Goods Sold (COGS)</strong>.</p>
                    <div className="space-y-3">
                      <div className="p-3 bg-orange-50 rounded-lg border border-orange-100">
                        <span className="font-bold text-orange-800 text-xs">The Cascade Pattern:</span> Use a cheap model (e.g., GPT-4o-mini) for 90% of tasks and only call the expensive model for complex reasoning.
                      </div>
                      <div className="p-3 bg-orange-50 rounded-lg border border-orange-100">
                        <span className="font-bold text-orange-800 text-xs">Prompt Compression:</span> Reducing the number of tokens in your system prompt can save thousands of dollars at scale.
                      </div>
                      <div className="p-3 bg-orange-50 rounded-lg border border-orange-100">
                        <span className="font-bold text-orange-800 text-xs">Semantic Caching:</span> If two users ask the same question, don't call the LLM twice. Serve the cached response.
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-orange-50 rounded-lg border border-orange-100 text-[10px] text-orange-800 italic">
                      <strong>PM Tip:</strong> "Small models for small tasks." Use a 7B model for classification and a 70B+ model for complex reasoning to save costs.
                    </div>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === 'requirements' && (
              <div className="space-y-8">
                <section className="prose prose-slate max-w-none">
                  <h2 className="text-3xl font-bold text-indigo-950 mb-4">Writing AI Requirements</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Traditional PRDs focus on "The system shall..." AI PRDs focus on <strong>"The model should achieve X% performance on Y dataset."</strong> You must define the boundaries of acceptable failure and the "Usefulness Threshold."
                  </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card title="The AI PRD Template" icon={FileText}>
                    <div className="space-y-4 mt-2">
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm">1. Use Case & ROI</h4>
                        <p className="text-xs text-slate-500">Why AI? Why now? What is the "Minimum Viable Performance" (MVP)? If accuracy is 60%, is it better than nothing?</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm">2. Data Requirements</h4>
                        <p className="text-xs text-slate-500">What data do we have? What do we need to collect? Specify volume, variety, and quality targets.</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm">3. Failure Mode Analysis</h4>
                        <p className="text-xs text-slate-500">What is the worst thing the AI could say? Define fallbacks (e.g., confidence scores, human-in-the-loop).</p>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-indigo-50 rounded-lg border border-indigo-100 text-[10px] text-indigo-800 italic">
                      <strong>PM Tip:</strong> Your PRD should include a "Golden Set"—a list of 50-100 inputs and perfect outputs that the model MUST get right.
                    </div>
                  </Card>

                  <Card title="Prompt Engineering as a Requirement" icon={Zap} color="orange">
                    <p className="text-xs">The PM's role in "System Prompting." You must define the <strong>Persona</strong>, <strong>Constraints</strong>, and <strong>Output Format</strong>.</p>
                    <div className="mt-4 p-4 bg-slate-900 text-slate-300 rounded-xl font-mono text-[10px]">
                      <p className="text-emerald-400"># System Prompt Template</p>
                      <p>Role: Expert Financial Advisor</p>
                      <p>Task: Analyze the provided balance sheet.</p>
                      <p>Constraints: Do NOT give medical advice. Use JSON format.</p>
                    </div>
                    <p className="text-[10px] mt-4">PMs should provide the <strong>Few-Shot Examples</strong> that engineering will use to ground the model.</p>
                  </Card>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="p-6 bg-red-50 rounded-2xl border border-red-100">
                    <h5 className="font-bold text-red-900 mb-2">Hallucination Guardrails</h5>
                    <p className="text-[10px] text-red-800">Requirement: Model must cite sources for every factual claim. If confidence {"<"} 0.8, display fallback.</p>
                  </div>
                  <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                    <h5 className="font-bold text-blue-900 mb-2">Latency SLOs</h5>
                    <p className="text-[10px] text-blue-800">Requirement: TTFT {"<"} 400ms. Total Response {"<"} 3s. Use streaming UI for perceived speed.</p>
                  </div>
                  <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
                    <h5 className="font-bold text-emerald-900 mb-2">Safety & Bias</h5>
                    <p className="text-[10px] text-emerald-800">Requirement: Model must not generate gender-biased job descriptions. Test set must include 20% edge cases.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'monitoring' && (
              <div className="space-y-8">
                <section className="prose prose-slate max-w-none">
                  <h2 className="text-3xl font-bold text-indigo-950 mb-4">Monitoring & Observability</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    AI products don't just "go down"; they "go weird." You need to monitor for <strong>Drift</strong>, <strong>Bias</strong>, and <strong>Hallucinations</strong> in real-time. Software rots, but AI rots faster.
                  </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card title="The Three Types of Drift" icon={Activity}>
                    <div className="space-y-4">
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <h4 className="font-bold text-indigo-700 text-sm">1. Covariate Shift (Input Drift)</h4>
                        <p className="text-xs text-slate-500 mt-1">The type of data coming in changes. Example: Your English-only app suddenly gets thousands of Spanish users.</p>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <h4 className="font-bold text-indigo-700 text-sm">2. Concept Drift</h4>
                        <p className="text-xs text-slate-500 mt-1">The relationship between input and output changes. Example: A fraud detection model fails because scammers found a new loophole.</p>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <h4 className="font-bold text-indigo-700 text-sm">3. Label Shift (Output Drift)</h4>
                        <p className="text-xs text-slate-500 mt-1">The distribution of predictions changes. Example: An approval model suddenly rejecting 90% of applicants.</p>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-indigo-50 rounded-lg border border-indigo-100 text-[10px] text-indigo-800 italic">
                      <strong>PM Tip:</strong> Set up automated alerts for drift. If your input distribution shifts by more than 10%, it's time to retrain or re-evaluate.
                    </div>
                  </Card>

                  <Card title="RAG Observability" icon={Layers} color="orange">
                    <p className="text-xs">Tracing the "Thought Process" of your AI. Essential for debugging hallucinations.</p>
                    <div className="space-y-2 mt-4 text-[10px]">
                      <div className="flex justify-between border-b pb-1">
                        <span>Retrieval Step (Vector DB)</span>
                        <span className="text-emerald-600">Success</span>
                      </div>
                      <div className="flex justify-between border-b pb-1">
                        <span>Context Augmentation</span>
                        <span className="text-emerald-600">Success</span>
                      </div>
                      <div className="flex justify-between border-b pb-1">
                        <span>Generation Step (LLM)</span>
                        <span className="text-red-600">Hallucination Detected</span>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-orange-50 rounded-lg border border-orange-100 text-[10px] text-orange-800 italic">
                      <strong>PM Tip:</strong> Use tools like LangSmith or Arize to trace every request. If a user reports a bad answer, you must be able to see exactly what context was retrieved.
                    </div>
                  </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card title="Cost Monitoring" icon={DollarSign} color="red">
                    <p className="text-xs">Real-time token tracking to prevent "bill shock." Set up automated alerts for budget spikes.</p>
                  </Card>
                  <Card title="Latency Monitoring" icon={Zap} color="blue">
                    <p className="text-xs">P99 latency for streaming vs. non-streaming responses. Track TTFT (Time to First Token).</p>
                  </Card>
                  <Card title="Safety Monitoring" icon={ShieldCheck} color="emerald">
                    <p className="text-xs">Tracking how often safety filters are triggered. High trigger rates might indicate a "jailbreak" attempt.</p>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === 'ethics' && (
              <div className="space-y-8">
                <section className="prose prose-slate max-w-none">
                  <h2 className="text-3xl font-bold text-indigo-950 mb-4">AI Ethics, Safety & Trust</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Trust is the most expensive thing to build and the easiest to lose in AI. Ethical AI isn't just a "nice to have"—it's a risk management strategy.
                  </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card title="Bias & Fairness" icon={Users} color="red">
                    <p>AI models inherit biases from their training data. As a PM, you must proactively hunt for these.</p>
                    <ul className="list-disc pl-5 space-y-2 text-xs">
                      <li><strong>Historical Bias:</strong> Data reflecting past societal prejudices.</li>
                      <li><strong>Representation Bias:</strong> Under-representation of certain groups in the training set.</li>
                      <li><strong>Measurement Bias:</strong> Using proxies that don't accurately reflect the target variable.</li>
                    </ul>
                    <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-100 text-[10px] text-red-800 italic">
                      <strong>PM Tip:</strong> Run "Disparate Impact" analysis. Does your model perform significantly worse for one demographic than another?
                    </div>
                  </Card>

                  <Card title="Explainability (XAI)" icon={ShieldCheck} color="green">
                    <p>Why did the model make this decision? In regulated industries (Finance, Health), "I don't know" is not an acceptable answer.</p>
                    <div className="space-y-3">
                      <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                        <span className="font-bold text-emerald-800">Feature Importance:</span> Showing which inputs had the most weight (e.g., SHAP or LIME).
                      </div>
                      <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                        <span className="font-bold text-emerald-800">Counterfactuals:</span> "If your income was $5k higher, you would have been approved."
                      </div>
                    </div>
                  </Card>

                  <Card title="Safety Guardrails" icon={ShieldCheck} color="blue">
                    <p>Preventing the model from generating harmful, toxic, or illegal content.</p>
                    <div className="space-y-2 text-xs">
                      <p><strong>Input Filtering:</strong> Blocking toxic prompts before they reach the model.</p>
                      <p><strong>Output Scanners:</strong> Checking the model's response for PII or prohibited topics.</p>
                      <p><strong>Red Teaming:</strong> Adversarial testing where humans try to "break" the model's safety logic.</p>
                    </div>
                  </Card>

                  <Card title="The EU AI Act & Regulation" icon={AlertTriangle} color="orange">
                    <p>Global regulations are catching up. The EU AI Act categorizes AI systems by risk level:</p>
                    <ul className="list-disc pl-5 space-y-1 text-xs">
                      <li><strong>Unacceptable Risk:</strong> Social scoring (Banned).</li>
                      <li><strong>High Risk:</strong> Critical infra, hiring, credit scoring (Strict requirements).</li>
                      <li><strong>Limited Risk:</strong> Chatbots (Transparency requirements).</li>
                    </ul>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === 'ux' && (
              <div className="space-y-8">
                <section className="prose prose-slate max-w-none">
                  <h2 className="text-3xl font-bold text-indigo-950 mb-4">UX Design for Probabilistic Systems</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Traditional software is deterministic (Input A always leads to Output B). AI is probabilistic. This requires a fundamental shift in how we design interfaces—moving from "Command and Control" to "Intent and Collaboration."
                  </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card title="Designing for Uncertainty" icon={Users}>
                    <p>Never present AI output as absolute truth. Use UI patterns that signal confidence and fallibility.</p>
                    <ul className="list-disc pl-5 space-y-2 text-xs">
                      <li><strong>Confidence Scores:</strong> "I am 85% sure this is a cat." Use visual indicators like progress bars or color coding.</li>
                      <li><strong>Multiple Options:</strong> Presenting 3 variations instead of 1 "correct" answer (e.g., Google Search's "Did you mean?").</li>
                      <li><strong>Citations & Grounding:</strong> Linking back to the source data. This allows users to verify facts and builds long-term trust.</li>
                    </ul>
                    <div className="mt-4 p-3 bg-indigo-50 rounded-lg border border-indigo-100 text-[10px] text-indigo-800 italic">
                      <strong>PM Tip:</strong> If confidence is low, don't show the result. Instead, ask a clarifying question to narrow down the user's intent.
                    </div>
                  </Card>

                  <Card title="Designing for Latency" icon={Zap} color="blue">
                    <p>AI is slow. Your UI must feel fast even when the model is thinking.</p>
                    <div className="space-y-3 mt-4">
                      <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                        <span className="font-bold text-blue-800 text-xs">Streaming UI:</span> Displaying tokens as they are generated (like ChatGPT). This reduces "Time to First Token" (TTFT) and keeps users engaged.
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                        <span className="font-bold text-blue-800 text-xs">Optimistic UI:</span> Showing the expected state before the server confirms it. Best for simple actions like "Like" or "Archive."
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                        <span className="font-bold text-blue-800 text-xs">Skeleton Screens:</span> Using placeholders while data is loading to reduce perceived wait time.
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card title="Human-in-the-Loop (HITL)" icon={RefreshCcw} color="orange">
                    <p>Design workflows where humans can easily review, edit, or override AI decisions.</p>
                    <div className="p-3 bg-orange-50 rounded-lg border border-orange-100 text-xs">
                      <strong>The "Draft" Pattern:</strong> AI generates a draft, human polishes it. This reduces the cost of errors while maintaining high utility.
                    </div>
                    <div className="mt-4 p-3 bg-orange-50 rounded-lg border border-orange-100 text-[10px] text-orange-800 italic">
                      <strong>PM Tip:</strong> Every time a human edits an AI output, you have a high-quality training sample for your next model version.
                    </div>
                  </Card>

                  <Card title="The AI Personality & Tone" icon={MessageSquare} color="indigo">
                    <p>Defining the "Voice" of your AI is a product decision, not just a prompt engineering task.</p>
                    <ul className="list-disc pl-5 space-y-2 text-xs">
                      <li><strong>Persona Alignment:</strong> Is the AI a "Helpful Assistant," a "Strict Auditor," or a "Creative Partner"?</li>
                      <li><strong>Tone Consistency:</strong> Ensuring the AI sounds the same across different features and sessions.</li>
                      <li><strong>Empathy vs. Efficiency:</strong> When to be brief and when to be supportive (e.g., in customer support vs. data analysis).</li>
                    </ul>
                  </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card title="Feedback Loops" icon={MessageSquare} color="green">
                    <p className="text-xs">Make feedback frictionless. A simple thumbs up/down is often more effective than a long survey.</p>
                    <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-100 text-[10px]">
                      <strong>Implicit Feedback:</strong> If a user copies an AI-generated text, it's a "win." If they immediately click "Regenerate," it's a "loss."
                    </div>
                  </Card>
                  <Card title="Error States" icon={AlertTriangle} color="red">
                    <p className="text-xs">What happens when the model fails? Design graceful degradation.</p>
                    <div className="p-3 bg-red-50 rounded-lg border border-red-100 text-[10px]">
                      <strong>Fallback:</strong> "I'm having trouble with that right now. Would you like to try a simpler version or contact support?"
                    </div>
                  </Card>
                  <Card title="Prompt Suggestions" icon={Zap} color="orange">
                    <p className="text-xs">Don't expect users to be prompt engineers. Build "Prompt Templates" behind the scenes.</p>
                    <div className="p-3 bg-orange-50 rounded-lg border border-orange-100 text-[10px]">
                      <strong>Guided Inputs:</strong> Use forms and dropdowns to collect structured data, then inject it into a hidden prompt.
                    </div>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === 'infra' && (
              <div className="space-y-8">
                <section className="prose prose-slate max-w-none">
                  <h2 className="text-3xl font-bold text-indigo-950 mb-4">The AI Infrastructure Stack</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    The modern AI stack is moving from "Model-Centric" (where the model is everything) to "System-Centric" (where the model is just one component in a complex pipeline).
                  </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card title="The Modern AI Stack" icon={Layers}>
                    <div className="space-y-3 mt-2">
                      <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                        <h4 className="font-bold text-indigo-700 text-xs">1. Application Layer</h4>
                        <p className="text-[10px] text-slate-500">The UI/UX and business logic that users interact with.</p>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                        <h4 className="font-bold text-indigo-700 text-xs">2. Orchestration Layer</h4>
                        <p className="text-[10px] text-slate-500">LangChain, LlamaIndex. Managing prompts, memory, and tool calls.</p>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                        <h4 className="font-bold text-indigo-700 text-xs">3. Model Layer</h4>
                        <p className="text-[10px] text-slate-500">Foundation models (GPT-4, Llama 3) and fine-tuned variants.</p>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                        <h4 className="font-bold text-indigo-700 text-xs">4. Infrastructure Layer</h4>
                        <p className="text-[10px] text-slate-500">GPUs (H100s), Vector DBs, and serving frameworks (vLLM).</p>
                      </div>
                    </div>
                  </Card>

                  <Card title="Vector Databases & RAG" icon={Database} color="blue">
                    <p className="text-xs">The "Long-term Memory" for LLMs. Essential for Retrieval-Augmented Generation.</p>
                    <div className="space-y-3 mt-4">
                      <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                        <span className="font-bold text-blue-800 text-xs">Embeddings:</span> Converting text into numerical vectors that capture semantic meaning.
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                        <span className="font-bold text-blue-800 text-xs">Semantic Search:</span> Finding the most relevant documents based on meaning, not just keywords.
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                        <span className="font-bold text-blue-800 text-xs">RAG Pipeline:</span> Query → Embed → Search → Augment Prompt → Generate Answer.
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card title="GPU Orchestration" icon={Zap} color="orange">
                    <p className="text-xs">Managing the scarce and expensive compute resources needed for AI.</p>
                    <div className="text-[10px] space-y-1 mt-2">
                      <p><strong>On-demand:</strong> Pay as you go, but high risk of "Out of Capacity."</p>
                      <p><strong>Reserved:</strong> Guaranteed access, but high fixed cost.</p>
                    </div>
                  </Card>
                  <Card title="Model Serving" icon={RefreshCcw} color="emerald">
                    <p className="text-xs">Optimizing for throughput and latency.</p>
                    <div className="text-[10px] space-y-1 mt-2">
                      <p><strong>Quantization:</strong> Reducing model size (e.g., 4-bit) to run on cheaper GPUs.</p>
                      <p><strong>Batching:</strong> Processing multiple requests at once to save costs.</p>
                    </div>
                  </Card>
                  <Card title="Eval Frameworks" icon={ShieldCheck} color="green">
                    <p className="text-xs">Automating the testing of AI outputs.</p>
                    <div className="text-[10px] space-y-1 mt-2">
                      <p><strong>Examples:</strong> Ragas, DeepEval, Arize Phoenix.</p>
                      <p><strong>Role:</strong> Measuring faithfulness and relevance at scale.</p>
                    </div>
                  </Card>
                </div>

                <div className="bg-slate-900 text-white p-8 rounded-3xl">
                  <h3 className="text-xl font-bold mb-4">Advanced RAG Patterns</h3>
                  <p className="text-slate-400 text-sm mb-6">Moving beyond "Naive RAG" to production-grade retrieval systems.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
                    <div className="p-4 bg-slate-800 rounded-xl border border-slate-700">
                      <h4 className="font-bold text-indigo-400 mb-2">HyDE (Hypothetical Document Embeddings)</h4>
                      <p>The LLM generates a "fake" answer first, then uses that answer to search the vector DB. Often finds better matches than the raw query.</p>
                    </div>
                    <div className="p-4 bg-slate-800 rounded-xl border border-slate-700">
                      <h4 className="font-bold text-indigo-400 mb-2">Re-ranking (Cross-Encoders)</h4>
                      <p>Retrieve 100 documents with fast semantic search, then use a slower, more accurate model to pick the top 5 for the prompt.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'legal' && (
              <div className="space-y-8">
                <section className="prose prose-slate max-w-none">
                  <h2 className="text-3xl font-bold text-indigo-950 mb-4">Legal, Privacy & Compliance</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    AI introduces novel legal challenges. From copyright of training data to data residency requirements, the legal landscape is shifting rapidly. Compliance is no longer a checkbox; it's a competitive advantage.
                  </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card title="Copyright & IP" icon={FileText} color="red">
                    <p className="text-xs">Who owns the AI output? Can you use copyrighted data for training?</p>
                    <ul className="list-disc pl-5 space-y-2 text-[10px] mt-4">
                      <li><strong>Fair Use:</strong> The ongoing debate about whether training on public data is "fair use."</li>
                      <li><strong>Output Ownership:</strong> Most terms of service grant ownership to the user, but legal precedents are still forming.</li>
                      <li><strong>Infringement Risk:</strong> The risk of a model generating output that is too similar to its training data (e.g., "The New York Times vs. OpenAI").</li>
                    </ul>
                    <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-100 text-[10px] text-red-800 italic">
                      <strong>PM Tip:</strong> Use "Copyright Filters" in your output layer to prevent the model from generating verbatim snippets of copyrighted material.
                    </div>
                  </Card>

                  <Card title="Data Privacy & Residency" icon={ShieldCheck} color="blue">
                    <p className="text-xs">AI models can't "unlearn" specific data points easily. This creates conflict with the "Right to be Forgotten."</p>
                    <div className="space-y-3 mt-4">
                      <div className="p-3 bg-blue-50 rounded-lg border border-blue-100 text-[10px]">
                        <strong>PII Scrubbing:</strong> You MUST remove PII (emails, names, SSNs) before sending data to third-party LLM APIs. Use libraries like Presidio.
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg border border-blue-100 text-[10px]">
                        <strong>Data Residency:</strong> Some countries (e.g., Germany) require that data never leaves their borders. This often requires using local GPU providers or VPC-based deployments.
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card title="AI Governance Framework" icon={ShieldCheck} color="emerald">
                    <p className="text-xs">Internal policies for how your company uses AI. Essential for enterprise trust.</p>
                    <ul className="list-disc pl-5 space-y-2 text-[10px] mt-2">
                      <li><strong>Acceptable Use Policy:</strong> What can and cannot be built with AI.</li>
                      <li><strong>Human Oversight:</strong> Mandatory review for high-stakes decisions.</li>
                      <li><strong>Transparency:</strong> Disclosing to users when they are interacting with an AI.</li>
                    </ul>
                  </Card>

                  <Card title="Liability & Accountability" icon={AlertTriangle} color="red">
                    <p className="text-xs">If the AI gives bad medical advice or makes a biased hiring decision, who is liable?</p>
                    <div className="space-y-2 mt-2 text-[10px]">
                      <p><strong>The EU AI Act:</strong> The first major regulation that categorizes AI systems by risk level (Unacceptable, High, Limited, Minimal).</p>
                      <p><strong>Algorithmic Impact Assessment:</strong> A mandatory process for high-risk systems to document risks and mitigations.</p>
                    </div>
                  </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card title="Terms of Service" icon={FileText} color="orange">
                    <p className="text-xs">Reviewing "Opt-out" clauses. Are providers using your data to train their models?</p>
                    <div className="p-3 bg-orange-50 rounded-lg border border-orange-100 text-[10px]">
                      <strong>ZDR Policy:</strong> Enterprise customers require "Zero Data Retention."
                    </div>
                  </Card>
                  <Card title="Open Source Licensing" icon={Layers} color="indigo">
                    <p className="text-xs">Risks of using Llama 3, etc. in commercial products.</p>
                    <div className="p-3 bg-indigo-50 rounded-lg border border-indigo-100 text-[10px]">
                      <strong>Commercial Use:</strong> Check if the license allows for-profit use at your scale.
                    </div>
                  </Card>
                  <Card title="Compliance Standards" icon={ShieldCheck} color="green">
                    <p className="text-xs">SOC2, HIPAA, and AI-specific certifications.</p>
                    <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-100 text-[10px]">
                      <strong>ISO/IEC 42001:</strong> The new international standard for AI management systems.
                    </div>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === 'team' && (
              <div className="space-y-8">
                <section className="prose prose-slate max-w-none">
                  <h2 className="text-3xl font-bold text-indigo-950 mb-4">The AI Product Team & Your Career</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Building AI products requires a different team structure and a new set of skills for the PM. You are no longer just a "Requirement Writer"; you are an "Experimental Lead" who must manage uncertainty and probabilistic outcomes.
                  </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card title="AI PM vs. Traditional PM" icon={Users}>
                    <div className="space-y-4 mt-2">
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                          <h4 className="font-bold text-slate-900 mb-1">Traditional PM</h4>
                          <ul className="list-disc pl-4 space-y-1 text-slate-500">
                            <li>Deterministic logic</li>
                            <li>Feature-based roadmap</li>
                            <li>Fixed requirements</li>
                            <li>"Build it" mindset</li>
                          </ul>
                        </div>
                        <div className="p-3 bg-indigo-50 rounded-lg border border-indigo-100">
                          <h4 className="font-bold text-indigo-900 mb-1">AI PM</h4>
                          <ul className="list-disc pl-4 space-y-1 text-indigo-800">
                            <li>Probabilistic logic</li>
                            <li>Outcome-based roadmap</li>
                            <li>Evolving requirements</li>
                            <li>"Discover it" mindset</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card title="The AI PM Skillset" icon={Target} color="indigo">
                    <p className="text-xs">How to stand out in the AI era.</p>
                    <div className="space-y-3 mt-4 text-xs">
                      <div className="p-3 bg-indigo-50 rounded-lg border border-indigo-100">
                        <span className="font-bold text-indigo-800">Data Literacy:</span> Understanding distributions, bias, and statistical significance. You must be able to read a confusion matrix.
                      </div>
                      <div className="p-3 bg-indigo-50 rounded-lg border border-indigo-100">
                        <span className="font-bold text-indigo-800">Experimental Design:</span> Running A/B tests on models and managing "Eval Sets." You are a scientist as much as a manager.
                      </div>
                      <div className="p-3 bg-indigo-50 rounded-lg border border-indigo-100">
                        <span className="font-bold text-indigo-800">Technical Empathy:</span> Understanding the constraints of GPUs, latency, and model size. Knowing when to push and when to pivot.
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card title="Hiring & Team Structure" icon={Users} color="emerald">
                    <p>Who do you need on your team?</p>
                    <ul className="list-disc pl-5 space-y-2 text-xs">
                      <li><strong>AI Engineers:</strong> Focus on prompt engineering, RAG, and model integration.</li>
                      <li><strong>Data Engineers:</strong> Focus on data pipelines, vector DBs, and cleaning.</li>
                      <li><strong>MLOps:</strong> Focus on deployment, monitoring, and scaling models.</li>
                      <li><strong>Annotators:</strong> Human-in-the-loop for labeling and evaluation.</li>
                    </ul>
                  </Card>

                  <Card title="The AI PM Interview" icon={MessageSquare} color="orange">
                    <p className="text-xs">Common questions and how to answer them.</p>
                    <div className="space-y-2 mt-2 text-[10px]">
                      <p><strong>"How do you handle model hallucinations?":</strong> Focus on RAG, grounding, and confidence thresholds.</p>
                      <p><strong>"How do you measure AI success?":</strong> Mention the Evaluation Hierarchy and Business Impact metrics.</p>
                      <p><strong>"Buy vs. Build for LLMs?":</strong> Discuss the Cost/Control/Speed trade-offs.</p>
                    </div>
                  </Card>
                </div>

                <div className="bg-slate-900 text-white p-8 rounded-3xl">
                  <h3 className="text-xl font-bold mb-4">The Transition Roadmap</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
                    <div className="p-4 bg-slate-800 rounded-xl border border-slate-700">
                      <h4 className="font-bold text-indigo-400 mb-2">Step 1: Learn the Lingo</h4>
                      <p>Understand tokens, embeddings, context windows, and fine-tuning. Read "Designing ML Systems" by Chip Huyen.</p>
                    </div>
                    <div className="p-4 bg-slate-800 rounded-xl border border-slate-700">
                      <h4 className="font-bold text-indigo-400 mb-2">Step 2: Get Hands-on</h4>
                      <p>Build a simple RAG app using LangChain or OpenAI APIs. Understand the friction points of retrieval and generation.</p>
                    </div>
                    <div className="p-4 bg-slate-800 rounded-xl border border-slate-700">
                      <h4 className="font-bold text-indigo-400 mb-2">Step 3: Lead an AI Pilot</h4>
                      <p>Identify a high-value, low-risk internal use case to prove ROI. Focus on automation and time saved.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Floating Chatbot */}
      <AIChatbot />

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-200 py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-400 text-sm">
            A comprehensive guide for AI Product Leaders. Distilled from industry best practices and research.
          </p>
        </div>
      </footer>
    </div>
  );
}
