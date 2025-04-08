//너비 감소와 높이 감소 버튼 생성
//너비와 높이는 0이하가 될 수 없음
//너비와 높이는 150 이상이 될 수 없음

import { useState } from "react";

const Area = () => {
    const [size, setSize] = useState({ width: 100, height: 100 });
    return (
        <div>
            <h1>
                너비 : {size.width}, 높이 : {size.height}
            </h1>
            <div>
                <button
                    onClick={() => {
                        const copy = { ...size };
                        if (copy.width < 150) {
                            if (copy.width === 140) {
                                copy.width += 10;
                                setSize(copy);
                            } else {
                                copy.width += 20;
                                setSize(copy);
                            }
                        }
                    }}
                >너비 증가
                </button>
                <button
                    onClick={() => {
                        const copy = { ...size };
                        if (copy.height < 150) {
                            if (copy.height === 140) {
                                copy.height += 10;
                                setSize(copy);
                            } else {
                                copy.height += 20;
                                setSize(copy);
                            }
                        }
                    }}
                >
                    높이 증가
                </button>
            </div>
            <div>
                <button
                    onClick={() => {
                        const copy = { ...size };
                        if (copy.width > 0) {
                            if (copy.width === 10) {
                                copy.width -= 10;
                                setSize(copy);
                            } else {
                                copy.width -= 20;
                                setSize(copy);
                            }
                        }
                    }}
                >너비 감소
                </button>


                <button
                    onClick={() => {
                        const copy = { ...size };
                        if (copy.height > 0) {
                            if (copy.height === 10) {
                                copy.height -= 10;
                                setSize(copy);
                            } else {
                                copy.height -= 20;
                                setSize(copy);
                            }
                        }
                    }}
                >
                    높이 감소
                </button>
            </div>
        </div>
    );
};
export default Area;