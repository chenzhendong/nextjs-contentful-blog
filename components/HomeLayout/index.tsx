export function HomeLayout(props:any) {
    
    return (
        <div className="box m-4 p-6">
            <div className="tile is-ancestor">
                <div className="tile is-3">{props.left}</div>
                <div className="divider is-vertical"></div>
                <div className="tile is-8">{props.right}</div>
            </div>
        </div>
    );
}