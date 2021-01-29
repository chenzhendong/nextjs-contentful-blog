import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import Tex from '@matejmazur/react-katex';
import math from 'remark-math';
import 'katex/dist/katex.min.css';
import { formatDate } from 'lib/format'

const renderers = {
    code: ({ language, value }: { language: any, value: any }) => {
        return <SyntaxHighlighter language={language} children={value} />
    },
    inlineMath: ({ value }: { value: any }) => <Tex math={value} />,
    math: ({ value }: { value: any }) => <Tex block math={value} />
}

export function PostPage(prop: any) {
    const { post } = prop;

    return (
        <div className="box m-6">
            <div className="Level m-2">
                <div className="level-left">
                    <div className="button is-rounded category-style">
                        <Link href="/"><a>All Articles</a></Link>
                    </div>
                </div>
            </div>
            <div className="m-6">
                <div className="container title is-3">{post.fields.title}</div>
                <div className="has-text-muted">{formatDate(post.fields.publishDate)}</div>
                <div className="content mt-4">
                    <ReactMarkdown plugins={[math]}
                        renderers={renderers}
                        children={post.fields.body} />
                </div>
            </div>
        </div>
    )
}