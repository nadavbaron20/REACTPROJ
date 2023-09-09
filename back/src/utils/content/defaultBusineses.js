export const defaultBusinesses = [
    {
        imgUrl: `data:image/png;base64,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`,
        name: `התימני`,
        website: `https://temani.co.il`,
        phone: `08-6438282`,
        address: {
            country: `ישראל`,
            city: `באר שבע`,
            street: `שחל 30`
        }

    },
    {
        imgUrl: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA6lBMVEX///8QR4z/4A8APYeGoMIAO4enssu2x9zd4usAQYkAPIj/3wBkfKgLRYvo7fTh6PFCa6JCZp3Ay90RUZT/52N3krn/+uI5aKIAAAAANYSAmr74+Pjl5eVsamydnJ0AQonq6uqnpqfLysvw8PB4d3m4t7iKiYrZ2dmVlJVYV1kXExhFQ0ZiYWOCgYNSUVKvr6///e0tKy4jICS8vLw8OjzOzs5qhrExW5f/9bmfss0AMYIAI33/7HP/5kb/+tr/98j/8Zn/7oH/6FX/6ms1MzUOBhD/7otTd6n/9r3/4zTQ2eb/86X//vWTqsnfaRo/AAAIq0lEQVR4nO2aC3ea2BaADxJjiEETrY0GRBAEFND6Hm0709ubXO84k///d2Yf1Ig8T9oal5n9rZUocNju7zwBJQRBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEAQ5b758OnUGx+bD199PncKR+VD8850rfigWi3+cOomj8qGYK+b+OnUWxwQMQfHbqdM4ItQQHP/z96kTORobw1zxy7tV3Brmit9Pncmx2Bnmil8/njqX4/BiCIrvc9XYG+be6dofMIRV47dTp3MEgobvc2E8MATHb6dO6JcTMvzZtV+SDl8TDscc2f7tC0m6vi8t6aqeeG46YcNc8b8/o2gaKn1pG4O4o5IWuxuYmiqc1KFvZdPWCVEHzW7fkLeHO163675svY6IISj+xE3xqE4dJKPuxR2VmmbCeYOhRZT6I33bqTsqUfujsWWNt05m3bQsS7F+KKWoISyMP6447Drw33ImoKKPlY5KpLbcVsaSrGkyGHqa3YEWosfG/rGxtjGcyMTrjlQ44hp9nUzcQJ9U6rvWk9vUU+34QeQplJHGOuzV7HFiA8cY5nI/fnUztHvwsZ4NjSV1jYHZV/W+a9g9r2l3HVV3+4rmOpBj1+h4fUmd9I1Nq2qOTpqKq0B/deC9Wm/vY6qOvXur1V2vbU08zYAgGtQEsXoWGdKoE/WNDC0HumlvatjE7sK2O9D78OqN2sSqy3oXRpr0aMNwhWP9ge4Y2/OUvkS6HdslxLDHfdJ5DDSJXKfd03ObA6JBHL1JT+qaRGlCZVpQcgQfKfWTBsCvNZQnkukSxSWuTbqO67qOojtj4tvKI1l3ptTGJUOnCcc09XHXVDYYOmO5N5V6Vqfvd9qAId1otx2PKDTOE90cO7ppgGEbGr9HZyi/Qo9vOHUkazjtdwj0t74tA5L6CC1gNiGzoaxPqBFs9BT/mDzcTR4m5Dcck1EH9MHQegr0Unk09l9dk1YOkXvUsNOXPA8MB1A1T9QQavYtDCE50nNHhBq63jY/sPDA0BrK6iMMNBirZLIZWdZI357ogWGvDV1x0iED+t7YB5WMof/atbc1Re0hukE/wIDCdW2z4y0MaS/y6pB+XyHTnmdNB7o/iujQsUaqPHzsWIYjk/aTaU2hSH1n2KSJTmGsPsF0AtUkO1BybKubSmqONCje04hBG2rw1LbMiQXLimJ5Q3riZGAZo6QLgl9r2IYxb8HiTTSo57bZNDRJp2kOoJ+piq4rFsyytGfSYwqR7V1agwGRbJnoCnS4Nm0SeWA0jcHuKmdgNpsmLDcdf7UdG34QSTOaGl1tngbKJuobGIaIu0iTUo6FTpYOtmI2Nq/S05SkBDuq4dsg16dph9+BoWqmXrC+A8O0Lkreh2E6aHj+fGE0LJXKV/HErQiJha/iC5fhBf6XsvNNDl1OOOPT9xjFsGG58Ly6r7au41hWwjlULme3VY6PK5znwp+/vqyt5uJ9iZTvufnq4XKdqldZQGgxNnRjlXTWx5h+emhYerjjeEEUOZGLoREyXNxWeaGVUFishvxu5gKEbt2C4V1LFPjWvJbs+LxKCS3cJNfM/yKKQcPSrMHHhtySDxpKCzEvpJQ+NFyvGrTiOG5jSN+JotBYxXZW6ZJLDZ1mGFUMGBbu8ml+h4ZXs0Z64aAhpCxsd+8N/Vznl9Ecyzep9ZxiuKD/vhWLCYYXVSE17oFhZZ5VOGAoPYgvKR8aci2uFk5zfZchmGy4mtG58P+5YpyhVFtmxA0aFpatrMJ7Q+k2v98dMoTBPTucoQt8ZuhEw5v8jHb73/4sxhheiJmCe8NKNbvwi6FUCwhGDUXhIai4zmrAVENBuKXB/ggqbg0LDIIvhuV5ZjUHDBcHk0bEEBJe7HO8umcInWIII5tO0J++FkOG5ewuGjDMHLBBw8rh9BVjyC1fVo3SimcInWbICXc0y8DC6BtKM5acd4aLfHbRvWGoveMMhdWuny6uWUKnGnKtKk3z04uib1hhibszhPX6FYbh6ogz5LjCNsW0VXBPuiGMbL/b7y5SP/p9g6kJt4bPLB1pZ1gKV0esobBd+S+YekeWIVxLPNOtb3vDNZvgxrB0y9SEW8PIDBZrKPL+SGQNnWUI8XzFv/y1nxo+sLXKxnDNNFS2hlItXHnxvZSvvWKwZBtCqpuFka791DD++jaKb1hjrA7fsBxZOOMNOcHvpIyVx2DI8TdUkS6MYFhasgXeGM4Zq8M3XEcGVoLhssQ+HTAZcte+4u++YaXBFnhjyFrYN4wuLAmGeZhNS6yVx2TI8Zu1//tH1vWN2xgyN7hvGF1nEwyvYWq4YmxCRkNOqPqKf0P3X/Js0Hv89WfGwv49frTfJRjyD2DImkeDzZBrzbcXYZWHCzYeruhTAMbCF3TCvmU1FGqvCb1gM+Ra+aSSv4zodXSK4c8TNoR7s8UP/nCFlZMbiuIFKK4LrMD8qzMXrrzWMC40w0PHVENY6suwhi/zbHxe05mGsXCj9VrDq2joz+Hnl683rJbZL9q4xhW9k2Qs7K8WrzOMLrX5NzYU6WPs92zYuqejguERzTb0+RkK/lMxtscB52nI+8tngfHC9AwNxfnmNpXlQdt5GgqzTZiLVzzFOC/D3Xdra7a55vwMhZcv7dieF52doVh9+U5XqrKMxLMz5AP3IZVrhn56bob5i2CkS4ZnV+dlKPKzw1CL7EXxrAzFfC18F/PcYPqG9DwMRaEa8yygcpvxcPN8DFv8TezHlGtiajOeh6Eo8MtqJeFJh7SeLa8FMemr1VMYrhrRO/GUe3xeqM5XD6k/6yk938zpr3pizxehwDzykQ36i6Ho7uUvucevXMagJ+ynVNbZD6quKoWk0+FozLGCRPSY3aCix8RI+n0XgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiD/bv4B1+wRm3ZNfFgAAAAASUVORK5CYII=`,
        name: `ישקר`,
        website: `https://iscar.co.il`,
        phone: `08-6438282`,
        address: {
            country: `ישראל`,
            city: `תפן`,
            street: `מגדל תפן`
        }

    },
    {
        imgUrl: `https://wallpapers.com/images/hd/view-background-1thya1tc0sxgrhfm.jpg`,
        name: `התימני`,
        website: `https://temani.co.il`,
        phone: `08-6438282`,
        address: {
            country: `ישראל`,
            city: `באר שבע`,
            street: `שחל 30`
        }

    },
    {
        imgUrl: `https://s3-symbol-logo.tradingview.com/intel--600.png`,
        name: `אינטל`,
        website: `https://intel.co.il`,
        phone: `08-6438282`,
        address: {
            country: `ישראל`,
            city: `חיפה`,
            street: `שחל 30`
        }

    },
    {
        imgUrl: `https://img.mako.co.il/2012/08/23/micr_c.jpg`,
        name: `מיקרוסופט`,
        website: `https://microsoft.com`,
        phone: `08-6438282`,
        address: {
            country: `ישראל`,
            city: `תל אביב`,
            street: `שחל 30`
        }

    },
]