import React, { useState, useEffect } from "react";

import Button from '@material-ui/core/Button';

export default function RandomCat() {
    const [RandomCatImg, setRandomCatImg] = useState(null);

    const fetchRandomCat = () => {
        setRandomCatImg("");
        fetch(`https://aws.random.cat/meow`)
            .then((res) => res.json())
            .then((catInfo) => {
                setRandomCatImg(catInfo.file);
            });
    };

    useEffect(() => {
        if (RandomCatImg === null) {
            fetchRandomCat();
        }
    });

    return (
        <div>
          <header>
            <h3>Cute Cats</h3>
            <div>
              <Button 
                color="secondary" 
                variant="contained" 
                onClick={() => fetchRandomCat()}>
                  More Cats
              </Button>
            </div>
            {RandomCatImg !== "" ? (
              <div>
                <img src={RandomCatImg} width="400px" alt="Cat" />
              </div>
            ) : (
              <div>Loading Image</div>
            )}
          </header>
        </div>
    );
}