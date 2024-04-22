function heapfy(arr,n,i){
  let largest=i;
  let left=i*2+1
  let right=i*2+2
  if(left<n && arr[left]>arr[largest]) largest=left;
  if(right<n && arr[right]>arr[largest]) largest=right;
  if(largest!==i){
    [arr[i],arr[largest]]=[arr[largest],arr[i]];
    heapfy(arr,n,largest)
  }
}

function heapSort(arr){
  const n=arr.length;
  for(let i=n-1;i>=0;i--){
    heapfy(arr,n,i)
  }
   for(let i=n-1;i>=0;i--){
     [arr[0],arr[i]]=[arr[i],arr[0]]
     heapfy(arr,i,0)
   }
}
const array = [12, 11, 13, 5, 6, 7];
heapSort(array);
console.log("Sorted array:", array);