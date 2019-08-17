

#Function  difference
def difference(arr, n):
	#initialization of 
	d1 = 0
	d2 = 0
	
	for i in range(0, n):
		for j in range(0, n):
			#find sum of primary digonal
			if(i == j):
				d1 = d1 + arr[i][j]
			#finding sum of Secondary Digonal
			if(i == n - j - 1):
				d2 = d2 + arr[i][j]
			
	#Absolute Difference of Sum
	return abs(d1-d2)

#Input
n = 3
arr = [[2, 5, 6],
       [6, 9, 8],
       [8, 6, 5]]

print(difference(arr, n))
