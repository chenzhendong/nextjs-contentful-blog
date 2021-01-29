import useSWR from 'swr';

const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then(response => response.json());

export function ProfilePanel(props: any) {
    const { data: person, error } = useSWR('/api/person', fetcher);

    return (
        <div className="box p-5">
            {
                (person) ? (
                    <div className="container">
                        <div className="level">
                            <figure className="level-left image is-128x128">
                                <img className="is-rounded" src={"https:" + person.fields.image.fields.file.url} height="200" width="200" />
                            </figure>
                        </div>
                        <div className="container mt-5">
                            <div className="title is-5">{person.fields.name}</div>
                            <div className="content has-text-muted pt-2">{person.fields.shortBio}</div>
                        </div>
                    </div>
                ) : (
                        <div className="container">
                            <div className="category-style"> Loading ... </div>
                        </div>
                    )
            }
        </div>
    );
}