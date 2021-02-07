import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import Tex from '@matejmazur/react-katex';
import math from 'remark-math';
import 'katex/dist/katex.min.css';
import { formatDate } from 'lib/format'
import { useRouter } from 'next/dist/client/router';

const renderers = {
    code: ({ language, value }: { language: any, value: any }) => {
        return <SyntaxHighlighter language={language} children={value} />
    },
    inlineMath: ({ value }: { value: any }) => <Tex math={value} />,
    math: ({ value }: { value: any }) => <Tex block math={value} />
}

export function PostPage(prop: any) {
    const { post } = prop;
    const router = useRouter()

    return (
        <div className="box m-6">
            <div className="level m-2">
                <div className="level-left">
                    <div className="button is-rounded" onClick={() => router.push('/')}>
                        <span className="category-style">All Articles</span>
                    </div>
                </div>
            </div>
            <div className="m-6">
                <div className="container has-text-centered">
                    <div className="title is-3">{post.fields.title}</div>
                    <div className="has-text-muted">{formatDate(post.fields.publishDate)}</div>
                </div>
                <div className="content mt-6">
                    <ReactMarkdown plugins={[math]}
                        renderers={renderers}
                        children={post.fields.body} />
                </div>
            </div>
        </div>
    )
}