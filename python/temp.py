
# def lcs(X, Y, m, n): 
  
#     if m == 0 or n == 0: 
#        return 0; 
#     elif X[m-1] == Y[n-1]: 
#        return 1 + lcs(X, Y, m-1, n-1); 
#     else: 
#        return max(lcs(X, Y, m, n-1), lcs(X, Y, m-1, n)); 
#   	print(m, n)
  
# # Driver program to test the above function 
# X = "BACDEABVCADV"
# Y = "ABCV"
# print("Length of LCS is ", lcs(X , Y, len(X), len(Y))) 

def lcs(s1 , s2): 
    # find the length of the strings 
    m = len(s1) 
    n = len(s2) 
  
    # declaring the array for storing the dp values 
    L = [[None]*(n+1) for i in range(m+1)] 
  
    """Following steps build L[m+1][n+1] in bottom up fashion 
    Note: L[i][j] contains length of LCS of s1[0..i-1] 
    and s2[0..j-1]"""
    for i in range(m+1): 
        for j in range(n+1): 
            if i == 0 or j == 0 : 
                L[i][j] = 0
            elif s1[i-1] == s2[j-1]: 
                L[i][j] = L[i-1][j-1]+1
            else: 
                L[i][j] = max(L[i-1][j] , L[i][j-1]) 
  
    # L[m][n] contains the length of LCS of s1[0..n-1] & s2[0..m-1] 
    
    print(L[i])
    return L[m][n]

#end of function lcs 
  
  
# Driver program to test the above function 
s1 = "AXAXAXABA"
s2 = "XAXAABCCC"
print(lcs(s1, s2))

