import React, { useRef, useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Next from './Buttons/Next';
import Prev from './Buttons/Prev';
import First from './First/First';
import Second from './Second/Second';
import Third from './Third/Third';
import Fourth from './Fourth/Fourth';
import Six from './Six/Six';
import Seven from './Seven/Seven';
import Eight from './Eight/Eight';
import Nine from './Nine/Nine';
import Countdown from './countdown/Countdown';
import './sheets.css';

export default function Sheets() {
    const sliderRef = useRef();
    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(false);

    const Ref = useRef(null);

    const [timer, setTimer] = useState('00:00:00');

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        return {
            total, minutes, seconds
        };
    }

    const startTimer = (e) => {
        let { total, minutes, seconds }
            = getTimeRemaining(e);
        if (total >= 0) {

            setTimer(
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }


    const clearTimer = (e) => {
        setTimer('00:01:00');

        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 10)
        Ref.current = id;
    }

    const getDeadTime = () => {
        let deadline = new Date();

        deadline.setSeconds(deadline.getSeconds() + 60);
        return deadline;
    }

    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);

    const handlePrevious = () => {
        sliderRef.current.slickPrev()
    }
    const handleNext = () => {
        sliderRef.current.slickNext();
        clearTimer(getDeadTime());
        setFlag(false);
    }
    const beforeChange = (prev, next) => {
        setCount(next);
    };

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: beforeChange
    };
    const index = count;

    if (index === 4) {
        setTimeout(() => {
            setFlag(true)
        }, 60000)
    }
    return (
        <>
        <div className="borderBg"></div>
            <main className="container">
                <Slider {...settings} ref={sliderRef}>
                    <div>
                        <First />
                    </div>
                    <div>
                        <Second/>
                    </div>
                    <div>
                        <Third/>
                    </div>
                    <div>
                        <Fourth/>
                    </div>
                    <div>
                        <Countdown timer={timer} />
                    </div>
                    <div>
                        <Six/>
                    </div>
                    <div>
                        <Seven/>
                    </div>
                    <div>
                        <Eight/>
                    </div>
                    <div>
                        <Nine/>
                    </div>
                </Slider>
                <div>
                    {index === 4 && flag === false ? '' :
                        <>
                            <Prev index={index} count={count} handlePrevious={handlePrevious} />
                            <Next index={index} count={count} handleNext={handleNext} />
                        </>
                    }

                </div>
            </main>
        </>
    )
}
