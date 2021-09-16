import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
const Skeleton3 = () => {
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
        display: "flex",
        textAlign: "right",
        flexDirection: "column",
        margin: "0px 0px 0px 5px",
        minWidth: "400px"
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
                        width={150}
                        height={130}
                    />
                    <Skeleton
                        style={{marginTop:"5px"}}
                        count={1}
                        duration={2}
                        delay={2}
                        width={100}
                        height={25}
                    />
                </div>
                <div style={publicFigure__skeleton__action}>
                    <Skeleton
                        style={{marginTop:"5px"}}
                        count={1}
                        duration={2}
                        delay={2}
                        width={30}
                        height={25}
                    />
                    <Skeleton
                        style={{marginTop:"5px"}}
                        count={1}
                        duration={2}
                        delay={2}
                        width={30}
                        height={25}
                    />
                </div>
                <div style={publicFigure__skeleton__RightSide}>
                    <Skeleton 
                        count={1}
                        duration={2}
                        delay={1}
                        width={150}
                        height={20}
                    />
                    <Skeleton 
                        style={{marginTop:"25px"}}
                        count={1}
                        duration={2}
                        delay={1}
                        width={140}
                        height={10}
                    /> 
                    <Skeleton 
                        count={1}
                        duration={2}
                        delay={1}
                        width={70}
                        height={10}
                    />
                    <Skeleton 
                        count={1}
                        duration={2}
                        delay={1}
                        width={100}
                        height={10}
                    />
                    <Skeleton
                        style={{marginTop:"25px", marginLeft:"10px"}}
                        count={2}
                        duration={2}
                        delay={1}
                        width={60}
                        height={10}
                    />                     
                </div>
            </div>
        </SkeletonTheme>
    </div>
    )
}

export default Skeleton3
