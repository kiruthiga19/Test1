function secondLargest(arr) {
        arr.sort();
        for (let i = arr.length - 2; i >= 0; i--) {
          if (arr[i] != arr[i - 1]) {
            return arr[i];
          }
        }
      }
                  
      arr = [12, 35, 1, 10, 34, 1];
      console.log(secondLargest(arr));