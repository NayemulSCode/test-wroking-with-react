import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const Skeleton4 = () => {
    const publicFigure__skeleton ={
        textAlign: "start", 
        padding: "5px"
    }
    const publicFigure__skeleton__action ={
        marginLeft: "15px",
        display: "flex",
        flexDirection: "column"
    }
    const publicFigure__skeleton__main ={
        display: "flex",
    }
    const publicFigure__skeleton__LeftSide={
        display: "flex",
        flexDirection: "column",
    }
    const publicFigure__skeleton__RightSide={
        textAlign: "right",
        margin: "0px 0px 0px 5px",
        minWidth: "250px",
    }
    return (
        <div style={publicFigure__skeleton}>
        <SkeletonTheme color="#202020" highlightColor="#444">
        <div style={publicFigure__skeleton__main}>
            <div style={publicFigure__skeleton__LeftSide}>
                <Skeleton 
                    count={1}
                    duration={2}
                    delay={2}
                    width={30}
                    height={30}
                    circle={true}
                />
                <Skeleton
                    style={{marginTop:"5px"}}
                    count={1}
                    duration={2}
                    delay={2}
                    width={30}
                    height={20}
                />
            </div>
            <div style={publicFigure__skeleton__action}>
                <Skeleton
                    style={{marginTop:"17px"}}
                    count={1}
                    duration={2}
                    delay={2}
                    width={70}
                    height={10}
                />
                <Skeleton
                    style={{marginTop:"5px"}}
                    count={1}
                    duration={2}
                    delay={2}
                    width={70}
                    height={15}
                />
            </div>
            <div style={publicFigure__skeleton__RightSide}>
                <Skeleton 
                    style={{marginRight: "10px"}}
                    count={2}
                    duration={2}
                    delay={1}
                    width={30}
                    height={20}
                />                  
            </div>
        </div>
    </SkeletonTheme>
</div>
    )
}

export default Skeleton4
