import React from 'react';

const base = [{id:1, name: 'Lindemans Wine', like: 257, position: "Art Direction, Web Design" },
              {id:2, name: 'Wine Lindemans', like: 248, position: "CEO"},
              {id:3, name: 'Wine Wine', like: 35, position: "Web Design" }];
const cardList = base.map((pers) => <li key={pers.id}  className="card-cube resp-ind-lg">
    <img src="img/cards/290cards-1.jpg" alt=""/>
    <ul className="card-cube-hover  flex-dir-cn flex-align-center flex-content-center">
        <li className="button-circle-like indent-bottom-10"></li>
        <li className="button-circle-sirch indent-bottom-10"></li>
        <li className="button-circle-stick "></li>
    </ul>
    <div className="card-cube-bottom flex-content-between">
        <div className="flex-dir-cn">
            <h3 className="h3-white-sm normal indent-bottom-10">{pers.name}</h3>
            <p className="p-tifany-sm">{pers.position}</p>
        </div>
        <p className="p-tifany-sm p-count-like ">{pers.like}</p>
    </div></li>);

class Map extends React.Component {
    render() {
        return (
            <section className="section-latest-works flex-dir-cn flex-content-center">
                <div className="container reletive">
                    <ul className="flex-content-between-lg">{cardList}</ul>
                </div>
            </section>
        )
    }
}
export default Map

