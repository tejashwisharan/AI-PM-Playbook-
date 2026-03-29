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
    className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all w-full text-left ${
      active 
        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-100' 
        : 'text-slate-600 hover:bg-slate-50 hover:text-indigo-600'
    }`}
  >
    <Icon size={18} className={active ? 'text-white' : 'text-slate-400 group-hover:text-indigo-600'} />
    <span className="font-medium text-sm">{label}</span>
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

      <div className="flex flex-col md:flex-row min-h-[calc(100vh-65px)]">
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-64 bg-white border-r border-slate-200 p-4 shrink-0 sticky top-[65px] h-auto md:h-[calc(100vh-65px)] overflow-y-auto">
          <div className="mb-6 px-2">
            <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Playbook Sections</h2>
          </div>
          <nav className="flex flex-col gap-1">
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
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-6 md:p-10 max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
            {activeTab === 'strategy' && (
              <div className="space-y-10">
                <section className="prose prose-slate max-w-none">
                  <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-6">AI Strategy: The Probabilistic Shift</h2>
                  <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
                    Traditional software is deterministic. AI is probabilistic. This shift changes everything from how you define success to how you build defensibility.
                  </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card title="The Data Flywheel" icon={RefreshCcw} color="indigo">
                    <p>Defensibility in AI comes from the <strong>Data Flywheel</strong>. More users → More data → Better model → Better product → More users.</p>
                    <div className="mt-4 p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                      <h4 className="font-bold text-indigo-900 text-sm mb-2">Key Strategy:</h4>
                      <p className="text-xs text-indigo-800">Don't just collect data; collect <strong>high-signal feedback</strong>. Implicit feedback (clicks, time-on-task) is often more valuable than explicit ratings.</p>
                    </div>
                  </Card>

                  <Card title="Buy vs. Build vs. Adapt" icon={Layers} color="emerald">
                    <p>Chip Huyen emphasizes that most companies should <strong>Adapt</strong> rather than Build from scratch.</p>
                    <ul className="mt-4 space-y-2 text-xs">
                      <li className="flex gap-2"><strong>Buy:</strong> Use standard APIs for generic tasks (e.g., translation).</li>
                      <li className="flex gap-2"><strong>Adapt:</strong> RAG or Fine-tuning for domain-specific tasks.</li>
                      <li className="flex gap-2"><strong>Build:</strong> Only for core IP where you have a unique data advantage.</li>
                    </ul>
                  </Card>
                </div>

                <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
                  <h3 className="text-2xl font-bold mb-4">The "AI-First" Mindset</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
                    <div>
                      <div className="text-indigo-400 font-mono text-sm mb-2">01</div>
                      <h4 className="font-bold mb-2">Iterative over Linear</h4>
                      <p className="text-slate-400 text-xs">You don't "ship and forget." You deploy, monitor, and retrain.</p>
                    </div>
                    <div>
                      <div className="text-indigo-400 font-mono text-sm mb-2">02</div>
                      <h4 className="font-bold mb-2">Data-Centricity</h4>
                      <p className="text-slate-400 text-xs">Model architecture is a commodity. Data quality is your competitive edge.</p>
                    </div>
                    <div>
                      <div className="text-indigo-400 font-mono text-sm mb-2">03</div>
                      <h4 className="font-bold mb-2">Failure as a Feature</h4>
                      <p className="text-slate-400 text-xs">Design for uncertainty. How the system handles "I don't know" defines the UX.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'lifecycle' && (
              <div className="space-y-10">
                <section className="prose prose-slate max-w-none">
                  <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-6">The ML Lifecycle: Data-Centric Iteration</h2>
                  <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
                    Chip Huyen argues that ML development is 80% data and 20% model. The lifecycle is not a straight line; it's a series of loops focused on data quality.
                  </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card title="Data-Centric vs. Model-Centric" icon={Database} color="blue">
                    <div className="space-y-4">
                      <div className="p-4 bg-blue-50 rounded-xl">
                        <h4 className="font-bold text-blue-900 text-sm mb-1">Model-Centric (Old Way)</h4>
                        <p className="text-xs text-blue-800">Keep data fixed, try to improve the model architecture. Diminishing returns.</p>
                      </div>
                      <div className="p-4 bg-indigo-50 rounded-xl">
                        <h4 className="font-bold text-indigo-900 text-sm mb-1">Data-Centric (New Way)</h4>
                        <p className="text-xs text-indigo-800">Keep model fixed, try to improve the data quality. Higher ROI for production systems.</p>
                      </div>
                    </div>
                  </Card>

                  <Card title="The Iterative Loop" icon={RefreshCcw} color="orange">
                    <div className="space-y-2 text-xs">
                      <p><strong>1. Scoping:</strong> Define the problem and success metrics.</p>
                      <p><strong>2. Data:</strong> Collect, label, and validate data.</p>
                      <p><strong>3. Modeling:</strong> Train, evaluate, and tune.</p>
                      <p><strong>4. Deployment:</strong> Serve, monitor, and retrain.</p>
                    </div>
                  </Card>
                </div>

                <div className="bg-white border border-slate-200 rounded-3xl p-8">
                  <h3 className="text-xl font-bold mb-6">Deployment Patterns</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="p-5 bg-slate-50 rounded-2xl">
                      <h4 className="font-bold text-slate-900 mb-2">Shadow Deployment</h4>
                      <p className="text-xs text-slate-600">Run the new model in parallel with the old one. Log results but don't show them to users. Safest way to test.</p>
                    </div>
                    <div className="p-5 bg-slate-50 rounded-2xl">
                      <h4 className="font-bold text-slate-900 mb-2">Canary Release</h4>
                      <p className="text-xs text-slate-600">Roll out to a small % of users. Monitor metrics closely before full rollout.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'metrics' && (
              <div className="space-y-8">
                <section className="prose prose-slate max-w-none">
                  <h2 className="text-3xl font-bold text-indigo-950 mb-4">AI Metrics & Evaluation Framework</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    In AI, "it works" is not a binary state. You must measure <strong>Quality</strong>, <strong>System Performance</strong>, and <strong>Business Impact</strong> simultaneously. Traditional metrics like DAU still matter, but AI requires a new layer of "Probabilistic Observability."
                  </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card title="The Evaluation Hierarchy" icon={BarChart3}>
                    <div className="space-y-4 mt-2">
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <h4 className="font-bold text-slate-900 text-sm">1. Deterministic Evaluation (Ground Truth)</h4>
                        <p className="text-xs mt-1">Exact match, F1 Score, Precision/Recall. Best for classification, extraction, or code generation where there's a "right" answer. Use <strong>Confusion Matrices</strong> to identify where the model is failing (False Positives vs. False Negatives).</p>
                      </div>
                      <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                        <h4 className="font-bold text-indigo-900 text-sm">2. Model-Based Evaluation (LLM-as-a-Judge)</h4>
                        <p className="text-xs mt-1">Using a stronger model (e.g., GPT-4o) to grade a smaller model's output based on a rubric. Scales evaluation where humans are too slow. Metrics include <strong>Faithfulness</strong>, <strong>Relevance</strong>, and <strong>Helpfulness</strong>.</p>
                      </div>
                      <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                        <h4 className="font-bold text-emerald-900 text-sm">3. Human-in-the-Loop (Golden Sets)</h4>
                        <p className="text-xs mt-1">The "Gold Standard." Experts manually review a subset of outputs. This data is used to create <strong>Golden Sets</strong>—the benchmark that all future model versions must be tested against.</p>
                      </div>
                    </div>
                  </Card>

                  <Card title="Adversarial & Behavioral Testing" icon={ShieldCheck} color="red">
                    <p className="text-xs">Don't just test the average case. Test the edges and the "bad actors."</p>
                    <div className="space-y-3 mt-4">
                      <div className="p-3 bg-red-50 rounded-lg border border-red-100">
                        <h4 className="font-bold text-red-900 text-xs">Invariance Testing</h4>
                        <p className="text-[10px]">Changing "he" to "she" or "New York" to "London" shouldn't change the model's core recommendation or logic. Essential for bias detection.</p>
                      </div>
                      <div className="p-3 bg-red-50 rounded-lg border border-red-100">
                        <h4 className="font-bold text-red-900 text-xs">Directional Expectation</h4>
                        <p className="text-[10px]">Adding more positive keywords should increase the sentiment score. Adding more constraints should narrow the output. If it doesn't, the model is unstable.</p>
                      </div>
                      <div className="p-3 bg-red-50 rounded-lg border border-red-100">
                        <h4 className="font-bold text-red-900 text-xs">Red Teaming</h4>
                        <p className="text-[10px]">Actively trying to make the model hallucinate, leak PII, or bypass safety filters using "jailbreak" prompts. This is a mandatory step before any public release.</p>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card title="RAG Metrics (The Triad)" icon={Database} color="blue">
                    <div className="space-y-2 text-[10px]">
                      <p><strong>Context Precision:</strong> Is the retrieved info relevant to the query? Measures the quality of your Vector DB search.</p>
                      <p><strong>Faithfulness:</strong> Is the answer derived ONLY from the context (no hallucination)? Measures the model's grounding.</p>
                      <p><strong>Answer Relevance:</strong> Does it actually answer the user's question? Measures the overall utility.</p>
                    </div>
                  </Card>
                  <Card title="Business Impact" icon={TrendingUp} color="emerald">
                    <div className="space-y-2 text-[10px]">
                      <p><strong>Automation Rate:</strong> % of tasks completed without human intervention. The primary ROI metric for many AI tools.</p>
                      <p><strong>Cost per Task:</strong> Total compute cost to achieve a successful user goal. Essential for unit economics.</p>
                      <p><strong>Time Saved:</strong> Difference in task completion time (AI vs. Manual). Measures the value proposition for the user.</p>
                    </div>
                  </Card>
                  <Card title="User Feedback" icon={Users} color="orange">
                    <div className="space-y-2 text-[10px]">
                      <p><strong>Explicit Feedback:</strong> Thumbs up/down, star ratings. High signal but low volume.</p>
                      <p><strong>Implicit Feedback:</strong> Copy-paste rate, "Regenerate" clicks, edit distance on AI output. High volume but noisy.</p>
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
                    AI features are expensive. Unlike traditional software where the marginal cost of a new user is near zero, every AI request has a <strong>real compute cost</strong>. Your pricing must reflect this "Cost of Intelligence" while capturing the value created.
                  </p>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card title="Pricing Models for AI" icon={DollarSign}>
                    <div className="space-y-4">
                      <div className="flex gap-4 p-4 hover:bg-slate-50 rounded-xl transition-colors cursor-default">
                        <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center shrink-0 font-bold">1</div>
                        <div>
                          <h4 className="font-bold text-slate-800">Token-Based (Usage)</h4>
                          <p className="text-xs text-slate-500">Charge per 1k tokens. Direct alignment with COGS. Best for APIs and developer tools where usage varies wildly.</p>
                        </div>
                      </div>
                      <div className="flex gap-4 p-4 hover:bg-slate-50 rounded-xl transition-colors cursor-default">
                        <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center shrink-0 font-bold">2</div>
                        <div>
                          <h4 className="font-bold text-slate-800">Subscription + Credits</h4>
                          <p className="text-xs text-slate-500">Fixed monthly fee includes X credits. Users can buy more. Predictable revenue with cost protection. Most common for SaaS AI features.</p>
                        </div>
                      </div>
                      <div className="flex gap-4 p-4 hover:bg-slate-50 rounded-xl transition-colors cursor-default">
                        <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center shrink-0 font-bold">3</div>
                        <div>
                          <h4 className="font-bold text-slate-800">Outcome-Based (Value)</h4>
                          <p className="text-xs text-slate-500">Charge per successful task (e.g., $5 per booked meeting). High value capture, but requires robust success tracking and trust.</p>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card title="Cost Optimization (COGS)" icon={Zap} color="orange">
                    <p className="mb-4 text-xs">As a PM, you must work with engineering to lower the <strong>Cost of Goods Sold (COGS)</strong> to maintain healthy margins.</p>
                    <div className="space-y-3">
                      <div className="p-3 bg-orange-50 rounded-lg border border-orange-100">
                        <span className="font-bold text-orange-800 text-xs">Model Cascading:</span> Use a cheap model (e.g., GPT-4o-mini) for 90% of tasks and only call the expensive model for complex reasoning or edge cases.
                      </div>
                      <div className="p-3 bg-orange-50 rounded-lg border border-orange-100">
                        <span className="font-bold text-orange-800 text-xs">Prompt Compression:</span> Reducing the number of tokens in your system prompt or using "Context Caching" can save thousands of dollars at scale.
                      </div>
                      <div className="p-3 bg-orange-50 rounded-lg border border-orange-100">
                        <span className="font-bold text-orange-800 text-xs">Semantic Caching:</span> If two users ask the same question, don't call the LLM twice. Serve the cached response from a Vector DB.
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-orange-50 rounded-lg border border-orange-100 text-[10px] text-orange-800 italic">
                      <strong>PM Tip:</strong> "Small models for small tasks." A fine-tuned 7B model can often outperform a 175B model on a specific, narrow task at 1/100th the cost.
                    </div>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === 'requirements' && (
              <div className="space-y-8">
                <section className="prose prose-slate max-w-none">
                  <h2 className="text-3xl font-bold text-indigo-950 mb-4">Writing AI Requirements (The AI PRD)</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Traditional PRDs focus on "The system shall..." AI PRDs focus on <strong>"The model should achieve X% performance on Y dataset."</strong> You must define the boundaries of acceptable failure and the "Usefulness Threshold."
                  </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card title="The AI PRD Template" icon={FileText}>
                    <div className="space-y-4 mt-2">
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm">1. Use Case & ROI</h4>
                        <p className="text-xs text-slate-500">Why AI? Why now? What is the "Minimum Viable Performance" (MVP)? If accuracy is 60%, is it better than nothing? Define the <strong>Cost of Failure</strong>.</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm">2. Data Requirements</h4>
                        <p className="text-xs text-slate-500">What data do we have? What do we need to collect? Specify volume, variety, and quality targets. Define the <strong>Data Acquisition Strategy</strong>.</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm">3. Failure Mode Analysis</h4>
                        <p className="text-xs text-slate-500">What is the worst thing the AI could say? Define fallbacks (e.g., confidence scores, human-in-the-loop, or "I don't know" responses).</p>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-indigo-50 rounded-lg border border-indigo-100 text-[10px] text-indigo-800 italic">
                      <strong>PM Tip:</strong> Your PRD should include a "Golden Set"—a list of 50-100 inputs and perfect outputs that the model MUST get right before it can be considered for production.
                    </div>
                  </Card>

                  <Card title="Prompt Engineering as a Requirement" icon={Zap} color="orange">
                    <p className="text-xs">The PM's role in "System Prompting." You must define the <strong>Persona</strong>, <strong>Constraints</strong>, and <strong>Output Format</strong> to ensure consistent behavior.</p>
                    <div className="mt-4 p-4 bg-slate-900 text-slate-300 rounded-xl font-mono text-[10px]">
                      <p className="text-emerald-400"># System Prompt Template</p>
                      <p>Role: Expert Financial Advisor</p>
                      <p>Task: Analyze the provided balance sheet.</p>
                      <p>Constraints: Do NOT give medical advice. Use JSON format.</p>
                      <p>Tone: Professional, concise, data-driven.</p>
                    </div>
                    <p className="text-[10px] mt-4">PMs should provide the <strong>Few-Shot Examples</strong> (Input/Output pairs) that engineering will use to ground the model and improve accuracy.</p>
                  </Card>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="p-6 bg-red-50 rounded-2xl border border-red-100">
                    <h5 className="font-bold text-red-900 mb-2">Hallucination Guardrails</h5>
                    <p className="text-[10px] text-red-800">Requirement: Model must cite sources for every factual claim. If confidence {"<"} 0.8, display a "Search instead" fallback.</p>
                  </div>
                  <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                    <h5 className="font-bold text-blue-900 mb-2">Latency SLOs</h5>
                    <p className="text-[10px] text-blue-800">Requirement: TTFT {"<"} 400ms. Total Response {"<"} 3s. Use streaming UI for perceived speed and progress indicators.</p>
                  </div>
                  <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
                    <h5 className="font-bold text-emerald-900 mb-2">Safety & Bias</h5>
                    <p className="text-[10px] text-emerald-800">Requirement: Model must not generate biased job descriptions. Test set must include 20% edge cases from diverse demographics.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'monitoring' && (
              <div className="space-y-8">
                <section className="prose prose-slate max-w-none">
                  <h2 className="text-3xl font-bold text-indigo-950 mb-4">Monitoring & Observability</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    AI products don't just "go down"; they "go weird." You need to monitor for <strong>Drift</strong>, <strong>Bias</strong>, and <strong>Hallucinations</strong> in real-time. Software rots, but AI rots faster due to changing data environments.
                  </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card title="The Three Types of Drift" icon={Activity}>
                    <div className="space-y-4">
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <h4 className="font-bold text-indigo-700 text-sm">1. Covariate Shift (Input Drift)</h4>
                        <p className="text-xs text-slate-500 mt-1">The distribution of input data changes. Example: Your English-only app suddenly gets thousands of Spanish users, or a medical model trained on adults is used on children.</p>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <h4 className="font-bold text-indigo-700 text-sm">2. Concept Drift</h4>
                        <p className="text-xs text-slate-500 mt-1">The relationship between input and output changes. Example: A fraud detection model fails because scammers found a new loophole, or consumer behavior shifts post-pandemic.</p>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <h4 className="font-bold text-indigo-700 text-sm">3. Label Shift (Output Drift)</h4>
                        <p className="text-xs text-slate-500 mt-1">The distribution of predictions changes significantly. Example: An approval model suddenly rejecting 90% of applicants due to a bug in the feature pipeline.</p>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-indigo-50 rounded-lg border border-indigo-100 text-[10px] text-indigo-800 italic">
                      <strong>PM Tip:</strong> Set up automated alerts for drift using statistical tests like Kolmogorov-Smirnov. If your input distribution shifts by more than 10%, it's time to retrain.
                    </div>
                  </Card>

                  <Card title="RAG Observability & Tracing" icon={Layers} color="orange">
                    <p className="text-xs">Tracing the "Thought Process" of your AI. Essential for debugging hallucinations and improving retrieval quality.</p>
                    <div className="space-y-2 mt-4 text-[10px]">
                      <div className="flex justify-between border-b pb-1">
                        <span>Retrieval Step (Vector DB)</span>
                        <span className="text-emerald-600">Success (Top 5 matches)</span>
                      </div>
                      <div className="flex justify-between border-b pb-1">
                        <span>Context Augmentation</span>
                        <span className="text-emerald-600">Success (3500 tokens)</span>
                      </div>
                      <div className="flex justify-between border-b pb-1">
                        <span>Generation Step (LLM)</span>
                        <span className="text-red-600">Hallucination Detected (Source mismatch)</span>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-orange-50 rounded-lg border border-orange-100 text-[10px] text-orange-800 italic">
                      <strong>PM Tip:</strong> Use tools like LangSmith, Arize, or Weights & Biases to trace every request. If a user reports a bad answer, you must be able to see exactly what context was retrieved.
                    </div>
                  </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card title="Cost Monitoring" icon={DollarSign} color="red">
                    <p className="text-xs">Real-time token tracking to prevent "bill shock." Set up automated alerts for budget spikes and track cost per user/session.</p>
                  </Card>
                  <Card title="Latency Monitoring" icon={Zap} color="blue">
                    <p className="text-xs">P99 latency for streaming vs. non-streaming responses. Track TTFT (Time to First Token) to ensure a responsive feel.</p>
                  </Card>
                  <Card title="Safety Monitoring" icon={ShieldCheck} color="emerald">
                    <p className="text-xs">Tracking how often safety filters are triggered. High trigger rates might indicate a "jailbreak" attempt or overly restrictive filters.</p>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === 'ethics' && (
              <div className="space-y-8">
                <section className="prose prose-slate max-w-none">
                  <h2 className="text-3xl font-bold text-indigo-950 mb-4">AI Ethics, Safety & Trust</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Trust is the most expensive thing to build and the easiest to lose in AI. Ethical AI isn't just a "nice to have"—it's a critical risk management strategy for the modern enterprise.
                  </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card title="Bias & Fairness" icon={Users} color="red">
                    <p>AI models inherit biases from their training data. As a PM, you must proactively hunt for these and mitigate them.</p>
                    <ul className="list-disc pl-5 space-y-2 text-xs">
                      <li><strong>Historical Bias:</strong> Data reflecting past societal prejudices (e.g., hiring data from 1950).</li>
                      <li><strong>Representation Bias:</strong> Under-representation of certain groups in the training set (e.g., facial recognition failing on dark skin).</li>
                      <li><strong>Measurement Bias:</strong> Using proxies that don't accurately reflect the target variable (e.g., using "arrests" as a proxy for "crime").</li>
                    </ul>
                    <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-100 text-[10px] text-red-800 italic">
                      <strong>PM Tip:</strong> Run "Disparate Impact" analysis. Does your model perform significantly worse (e.g., higher false negative rate) for one demographic than another?
                    </div>
                  </Card>

                  <Card title="Explainability (XAI)" icon={ShieldCheck} color="green">
                    <p>Why did the model make this decision? In regulated industries (Finance, Health), "I don't know" is not an acceptable answer from an AI system.</p>
                    <div className="space-y-3">
                      <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                        <span className="font-bold text-emerald-800">Feature Importance:</span> Showing which inputs had the most weight in the decision (e.g., using SHAP or LIME values).
                      </div>
                      <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                        <span className="font-bold text-emerald-800">Counterfactuals:</span> Providing actionable feedback: "If your income was $5k higher, your loan would have been approved."
                      </div>
                    </div>
                  </Card>

                  <Card title="Safety Guardrails & Red Teaming" icon={ShieldCheck} color="blue">
                    <p>Preventing the model from generating harmful, toxic, or illegal content through multi-layered defense.</p>
                    <div className="space-y-2 text-xs">
                      <p><strong>Input Filtering:</strong> Blocking toxic or prohibited prompts before they ever reach the model.</p>
                      <p><strong>Output Scanners:</strong> Checking the model's response for PII, toxicity, or prohibited topics before the user sees it.</p>
                      <p><strong>Red Teaming:</strong> Adversarial testing where humans (and other models) try to "break" the model's safety logic.</p>
                    </div>
                  </Card>

                  <Card title="The EU AI Act & Global Regulation" icon={AlertTriangle} color="orange">
                    <p>Global regulations are catching up. The EU AI Act categorizes AI systems by risk level, with strict requirements for High-Risk systems:</p>
                    <ul className="list-disc pl-5 space-y-1 text-xs">
                      <li><strong>Unacceptable Risk:</strong> Social scoring, real-time biometric ID in public (Banned).</li>
                      <li><strong>High Risk:</strong> Critical infra, hiring, credit scoring, education (Strict documentation & audit requirements).</li>
                      <li><strong>Limited Risk:</strong> Chatbots, deepfakes (Transparency requirements: users must know it's AI).</li>
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
                    <p>Never present AI output as absolute truth. Use UI patterns that signal confidence and fallibility to manage user expectations.</p>
                    <ul className="list-disc pl-5 space-y-2 text-xs">
                      <li><strong>Confidence Indicators:</strong> "I am 85% sure this is a cat." Use visual indicators like progress bars, color coding, or simple text labels.</li>
                      <li><strong>N-Best Options:</strong> Presenting 3 variations instead of 1 "correct" answer (e.g., Google Search's "Did you mean?" or multiple draft versions).</li>
                      <li><strong>Citations & Grounding:</strong> Linking back to the source data. This allows users to verify facts and builds long-term trust in the system.</li>
                    </ul>
                    <div className="mt-4 p-3 bg-indigo-50 rounded-lg border border-indigo-100 text-[10px] text-indigo-800 italic">
                      <strong>PM Tip:</strong> If confidence is low, don't show the result. Instead, ask a clarifying question to narrow down the user's intent or offer a manual fallback.
                    </div>
                  </Card>

                  <Card title="Designing for Latency & Perceived Speed" icon={Zap} color="blue">
                    <p>AI is slow. Your UI must feel fast even when the model is thinking. Perceived speed is often more important than actual speed.</p>
                    <div className="space-y-3 mt-4">
                      <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                        <span className="font-bold text-blue-800 text-xs">Streaming UI:</span> Displaying tokens as they are generated (like ChatGPT). This reduces "Time to First Token" (TTFT) and keeps users engaged.
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                        <span className="font-bold text-blue-800 text-xs">Optimistic UI:</span> Showing the expected state before the server confirms it. Best for simple, high-confidence actions.
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                        <span className="font-bold text-blue-800 text-xs">Skeleton Screens & Micro-copy:</span> Using placeholders and "thinking" messages (e.g., "Analyzing your data...") to reduce perceived wait time.
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card title="Human-in-the-Loop (HITL) Workflows" icon={RefreshCcw} color="orange">
                    <p>Design workflows where humans can easily review, edit, or override AI decisions. The AI should be a "Co-pilot," not an "Auto-pilot."</p>
                    <div className="p-3 bg-orange-50 rounded-lg border border-orange-100 text-xs">
                      <strong>The "Draft-Review-Publish" Pattern:</strong> AI generates a draft, human polishes it. This reduces the cost of errors while maintaining high utility.
                    </div>
                    <div className="mt-4 p-3 bg-orange-50 rounded-lg border border-orange-100 text-[10px] text-orange-800 italic">
                      <strong>PM Tip:</strong> Every time a human edits an AI output, you have a high-quality training sample (a "correction") for your next model version.
                    </div>
                  </Card>

                  <Card title="The AI Personality & Tone" icon={MessageSquare} color="indigo">
                    <p>Defining the "Voice" of your AI is a core product decision. It sets the emotional context for the user interaction.</p>
                    <ul className="list-disc pl-5 space-y-2 text-xs">
                      <li><strong>Persona Alignment:</strong> Is the AI a "Helpful Assistant," a "Strict Auditor," or a "Creative Partner"?</li>
                      <li><strong>Tone Consistency:</strong> Ensuring the AI sounds the same across different features, platforms, and sessions.</li>
                      <li><strong>Empathy vs. Efficiency:</strong> When to be brief and when to be supportive (e.g., in customer support vs. high-speed data analysis).</li>
                    </ul>
                  </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card title="Frictionless Feedback" icon={MessageSquare} color="green">
                    <p className="text-xs">Make feedback loops part of the core experience. A simple thumbs up/down is often more effective than a long survey.</p>
                    <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-100 text-[10px]">
                      <strong>Implicit Feedback:</strong> If a user copies an AI-generated text, it's a "win." If they immediately click "Regenerate," it's a "loss."
                    </div>
                  </Card>
                  <Card title="Graceful Error States" icon={AlertTriangle} color="red">
                    <p className="text-xs">What happens when the model fails? Design for graceful degradation rather than a hard crash.</p>
                    <div className="p-3 bg-red-50 rounded-lg border border-red-100 text-[10px]">
                      <strong>Fallback Copy:</strong> "I'm having trouble with that right now. Would you like to try a simpler version or contact support?"
                    </div>
                  </Card>
                  <Card title="Guided Prompting" icon={Zap} color="orange">
                    <p className="text-xs">Don't expect users to be prompt engineers. Build "Prompt Templates" and "Suggested Actions" into the UI.</p>
                    <div className="p-3 bg-orange-50 rounded-lg border border-orange-100 text-[10px]">
                      <strong>Structured Inputs:</strong> Use forms and dropdowns to collect data, then inject it into a hidden, optimized system prompt.
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
                    The modern AI stack is moving from "Model-Centric" (where the model is everything) to "System-Centric" (where the model is just one component in a complex pipeline). Understanding the stack is key to managing cost, latency, and reliability.
                  </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card title="The Modern AI Stack Layers" icon={Layers}>
                    <div className="space-y-3 mt-2">
                      <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                        <h4 className="font-bold text-indigo-700 text-xs">1. Application Layer</h4>
                        <p className="text-[10px] text-slate-500">The UI/UX and business logic. This is where you design for uncertainty and manage user intent.</p>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                        <h4 className="font-bold text-indigo-700 text-xs">2. Orchestration Layer</h4>
                        <p className="text-[10px] text-slate-500">Frameworks like LangChain or LlamaIndex. Managing prompts, memory, tool calls (Agentic workflows), and RAG pipelines.</p>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                        <h4 className="font-bold text-indigo-700 text-xs">3. Model Layer</h4>
                        <p className="text-[10px] text-slate-500">Foundation models (GPT-4, Llama 3, Gemini) and fine-tuned variants. Choosing the right size for the task.</p>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                        <h4 className="font-bold text-indigo-700 text-xs">4. Data & Infra Layer</h4>
                        <p className="text-[10px] text-slate-500">Vector DBs (Pinecone, Weaviate), GPUs (H100s), and serving frameworks (vLLM, TGI) for high throughput.</p>
                      </div>
                    </div>
                  </Card>

                  <Card title="Vector Databases & RAG Patterns" icon={Database} color="blue">
                    <p className="text-xs">The "Long-term Memory" for LLMs. Essential for Retrieval-Augmented Generation (RAG) to reduce hallucinations and provide up-to-date info.</p>
                    <div className="space-y-3 mt-4">
                      <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                        <span className="font-bold text-blue-800 text-xs">Embeddings:</span> Converting text into numerical vectors that capture semantic meaning. Quality of embeddings = Quality of search.
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                        <span className="font-bold text-blue-800 text-xs">Semantic Search:</span> Finding the most relevant documents based on meaning, not just keywords.
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                        <span className="font-bold text-blue-800 text-xs">RAG Pipeline:</span> Query → Embed → Search → Augment Prompt → Generate Answer. This is the standard for enterprise AI.
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card title="GPU Orchestration" icon={Zap} color="orange">
                    <p className="text-xs">Managing the scarce and expensive compute resources needed for AI inference and training.</p>
                    <div className="text-[10px] space-y-1 mt-2">
                      <p><strong>On-demand:</strong> Pay as you go, but high risk of "Out of Capacity" errors during peak times.</p>
                      <p><strong>Reserved:</strong> Guaranteed access, but high fixed cost. Best for stable, high-volume production apps.</p>
                    </div>
                  </Card>
                  <Card title="Model Serving & Optimization" icon={RefreshCcw} color="emerald">
                    <p className="text-xs">Optimizing for throughput and latency to keep costs down and users happy.</p>
                    <div className="text-[10px] space-y-1 mt-2">
                      <p><strong>Quantization:</strong> Reducing model precision (e.g., 4-bit) to run on cheaper GPUs with minimal quality loss.</p>
                      <p><strong>Speculative Decoding:</strong> Using a small model to predict tokens and a large model to verify, speeding up generation.</p>
                    </div>
                  </Card>
                  <Card title="Evaluation Frameworks" icon={ShieldCheck} color="green">
                    <p className="text-xs">Automating the testing of AI outputs at scale using model-based evals.</p>
                    <div className="text-[10px] space-y-1 mt-2">
                      <p><strong>Tools:</strong> Ragas, DeepEval, Arize Phoenix, LangSmith.</p>
                      <p><strong>Role:</strong> Measuring faithfulness, relevance, and toxicity across thousands of test cases.</p>
                    </div>
                  </Card>
                </div>

                <div className="bg-slate-900 text-white p-8 rounded-3xl">
                  <h3 className="text-xl font-bold mb-4">Advanced RAG & Agentic Patterns</h3>
                  <p className="text-slate-400 text-sm mb-6">Moving beyond "Naive RAG" to production-grade retrieval and autonomous systems.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
                    <div className="p-4 bg-slate-800 rounded-xl border border-slate-700">
                      <h4 className="font-bold text-indigo-400 mb-2">HyDE (Hypothetical Document Embeddings)</h4>
                      <p>The LLM generates a "fake" answer first, then uses that answer to search the vector DB. Often finds better matches than the raw, often short, user query.</p>
                    </div>
                    <div className="p-4 bg-slate-800 rounded-xl border border-slate-700">
                      <h4 className="font-bold text-indigo-400 mb-2">Agentic Workflows (Tool Use)</h4>
                      <p>Allowing the model to call external APIs (Search, SQL, CRM) to gather info or take actions. Requires robust error handling and "Plan-and-Execute" logic.</p>
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
                    AI introduces novel legal challenges. From copyright of training data to data residency requirements, the legal landscape is shifting rapidly. Compliance is no longer a checkbox; it's a competitive advantage for enterprise trust.
                  </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card title="Copyright & IP Ownership" icon={FileText} color="red">
                    <p className="text-xs">Who owns the AI output? Can you use copyrighted data for training? These are the billion-dollar questions.</p>
                    <ul className="list-disc pl-5 space-y-2 text-[10px] mt-4">
                      <li><strong>Fair Use Debate:</strong> The ongoing legal battle about whether training models on public data constitutes "fair use."</li>
                      <li><strong>Output Ownership:</strong> Most terms of service grant ownership to the user, but legal precedents (especially for copyrighting AI art/text) are still forming.</li>
                      <li><strong>Infringement Risk:</strong> The risk of a model generating output that is too similar to its training data (e.g., "The New York Times vs. OpenAI").</li>
                    </ul>
                    <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-100 text-[10px] text-red-800 italic">
                      <strong>PM Tip:</strong> Use "Copyright Filters" and "Source Attribution" in your output layer to prevent the model from generating verbatim snippets of copyrighted material.
                    </div>
                  </Card>

                  <Card title="Data Privacy & The Right to be Forgotten" icon={ShieldCheck} color="blue">
                    <p className="text-xs">AI models can't "unlearn" specific data points easily. This creates conflict with GDPR and other privacy laws.</p>
                    <div className="space-y-3 mt-4">
                      <div className="p-3 bg-blue-50 rounded-lg border border-blue-100 text-[10px]">
                        <strong>PII Scrubbing:</strong> You MUST remove PII (emails, names, SSNs) before sending data to third-party LLM APIs. Use libraries like Microsoft Presidio.
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg border border-blue-100 text-[10px]">
                        <strong>Data Residency:</strong> Some regions (e.g., EU, China) require that data never leaves their borders. This requires using local GPU providers or VPC-based deployments.
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card title="AI Governance Framework" icon={ShieldCheck} color="emerald">
                    <p className="text-xs">Internal policies for how your company uses AI. Essential for managing internal risk and external trust.</p>
                    <ul className="list-disc pl-5 space-y-2 text-[10px] mt-2">
                      <li><strong>Acceptable Use Policy:</strong> Defining what can and cannot be built or used with AI (e.g., no AI for HR decisions without human review).</li>
                      <li><strong>Human Oversight:</strong> Mandatory review for high-stakes decisions (Health, Finance, Legal).</li>
                      <li><strong>Transparency:</strong> Mandatory disclosure to users when they are interacting with an AI system.</li>
                    </ul>
                  </Card>

                  <Card title="Liability & Accountability" icon={AlertTriangle} color="red">
                    <p className="text-xs">If the AI gives bad medical advice or makes a biased hiring decision, who is liable? The developer, the user, or the model provider?</p>
                    <div className="space-y-2 mt-2 text-[10px]">
                      <p><strong>The EU AI Act:</strong> The first major regulation that categorizes AI systems by risk level (Unacceptable, High, Limited, Minimal).</p>
                      <p><strong>Algorithmic Impact Assessment:</strong> A mandatory process for high-risk systems to document risks, data sources, and mitigations.</p>
                    </div>
                  </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card title="Terms of Service (ToS)" icon={FileText} color="orange">
                    <p className="text-xs">Reviewing "Opt-out" clauses. Are providers using your proprietary data to train their future models?</p>
                    <div className="p-3 bg-orange-50 rounded-lg border border-orange-100 text-[10px]">
                      <strong>ZDR Policy:</strong> Enterprise customers should demand "Zero Data Retention" (ZDR) from API providers.
                    </div>
                  </Card>
                  <Card title="Open Source Licensing" icon={Layers} color="indigo">
                    <p className="text-xs">The "Open Source" vs. "Open Weights" debate. Risks of using models like Llama 3 in commercial products.</p>
                    <div className="p-3 bg-indigo-50 rounded-lg border border-indigo-100 text-[10px]">
                      <strong>Commercial Use:</strong> Check if the license allows for-profit use at your specific user scale (e.g., Llama 3's 700M user limit).
                    </div>
                  </Card>
                  <Card title="Compliance Standards" icon={ShieldCheck} color="green">
                    <p className="text-xs">SOC2, HIPAA, and new AI-specific certifications.</p>
                    <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-100 text-[10px]">
                      <strong>ISO/IEC 42001:</strong> The new international standard for AI management systems (AIMS).
                    </div>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === 'team' && (
              <div className="space-y-8">
                <section className="prose prose-slate max-w-none">
                  <h2 className="text-3xl font-bold text-indigo-950 mb-4">The AI Product Team & Your Career Transition</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Building AI products requires a different team structure and a new set of skills for the PM. You are no longer just a "Requirement Writer"; you are an "Experimental Lead" who must manage uncertainty, data quality, and probabilistic outcomes.
                  </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card title="AI PM vs. Traditional PM" icon={Users}>
                    <div className="space-y-4 mt-2">
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                          <h4 className="font-bold text-slate-900 mb-1">Traditional PM</h4>
                          <ul className="list-disc pl-4 space-y-1 text-slate-500">
                            <li>Deterministic logic (If/Then)</li>
                            <li>Feature-based roadmap</li>
                            <li>Fixed, static requirements</li>
                            <li>"Build it" mindset</li>
                            <li>Success = Shipped feature</li>
                          </ul>
                        </div>
                        <div className="p-3 bg-indigo-50 rounded-lg border border-indigo-100">
                          <h4 className="font-bold text-indigo-900 mb-1">AI PM</h4>
                          <ul className="list-disc pl-4 space-y-1 text-indigo-800">
                            <li>Probabilistic logic (Confidence)</li>
                            <li>Outcome-based roadmap</li>
                            <li>Evolving, data-driven reqs</li>
                            <li>"Discover it" mindset</li>
                            <li>Success = Model performance</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card title="The AI PM Skillset" icon={Target} color="indigo">
                    <p className="text-xs">How to stand out and thrive in the AI era. Transitioning requires a shift from "Manager" to "Scientist."</p>
                    <div className="space-y-3 mt-4 text-xs">
                      <div className="p-3 bg-indigo-50 rounded-lg border border-indigo-100">
                        <span className="font-bold text-indigo-800">Data Literacy:</span> Understanding distributions, bias, and statistical significance. You must be able to read a confusion matrix and understand Precision-Recall trade-offs.
                      </div>
                      <div className="p-3 bg-indigo-50 rounded-lg border border-indigo-100">
                        <span className="font-bold text-indigo-800">Experimental Design:</span> Running A/B tests on models, managing "Eval Sets," and defining "Golden Sets." You are a scientist as much as a manager.
                      </div>
                      <div className="p-3 bg-indigo-50 rounded-lg border border-indigo-100">
                        <span className="font-bold text-indigo-800">Technical Empathy:</span> Understanding the constraints of GPUs, latency, and model size. Knowing when to push for accuracy and when to pivot for speed.
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card title="Hiring & Team Structure" icon={Users} color="emerald">
                    <p>Who do you need on your team? The "Full-Stack AI Team" is more collaborative and less siloed.</p>
                    <ul className="list-disc pl-5 space-y-2 text-xs">
                      <li><strong>AI Engineers:</strong> Focus on prompt engineering, RAG pipelines, and model integration.</li>
                      <li><strong>Data Engineers:</strong> Focus on data pipelines, vector DBs, and cleaning messy real-world data.</li>
                      <li><strong>MLOps Engineers:</strong> Focus on deployment, monitoring, scaling, and automated retraining loops.</li>
                      <li><strong>Human Annotators:</strong> Essential for labeling data and providing the "Ground Truth" for evaluation.</li>
                    </ul>
                  </Card>

                  <Card title="The AI PM Interview & Career" icon={MessageSquare} color="orange">
                    <p className="text-xs">Common questions and how to demonstrate your AI-first mindset.</p>
                    <div className="space-y-2 mt-2 text-[10px]">
                      <p><strong>"How do you handle model hallucinations?":</strong> Focus on RAG, grounding, confidence thresholds, and human-in-the-loop fallbacks.</p>
                      <p><strong>"How do you measure AI success?":</strong> Discuss the Evaluation Hierarchy (Deterministic vs. Model-based) and Business Impact metrics.</p>
                      <p><strong>"Buy vs. Build for LLMs?":</strong> Discuss the Cost/Control/Speed trade-offs and the "Adapt" (Fine-tuning) middle ground.</p>
                    </div>
                  </Card>
                </div>

                <div className="bg-slate-900 text-white p-8 rounded-3xl">
                  <h3 className="text-xl font-bold mb-4">The Transition Roadmap: From Trad-PM to AI-PM</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
                    <div className="p-4 bg-slate-800 rounded-xl border border-slate-700">
                      <h4 className="font-bold text-indigo-400 mb-2">Step 1: Master the Fundamentals</h4>
                      <p>Learn the lingo: tokens, embeddings, context windows, and fine-tuning. Read "Designing ML Systems" by Chip Huyen and "AI Engineering" by various authors.</p>
                    </div>
                    <div className="p-4 bg-slate-800 rounded-xl border border-slate-700">
                      <h4 className="font-bold text-indigo-400 mb-2">Step 2: Get Hands-on (Build)</h4>
                      <p>Build a simple RAG app using LangChain or Gemini APIs. Understand the friction points of retrieval, prompt sensitivity, and generation latency.</p>
                    </div>
                    <div className="p-4 bg-slate-800 rounded-xl border border-slate-700">
                      <h4 className="font-bold text-indigo-400 mb-2">Step 3: Lead an AI Pilot</h4>
                      <p>Identify a high-value, low-risk internal use case (e.g., support automation) to prove ROI. Focus on data quality and iterative evaluation loops.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
      </div>

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
