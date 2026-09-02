//: [Previous](@previous)
func multiflyByTen(value: Int?) {
    guard let number = value, number < 11 else {
        print("Number is too high.")
        return
    }
    
    let result = number * 10
    print(result)
}

multiflyByTen(value: 10)
multiflyByTen(value: 5)
multiflyByTen(value: 11)
//: [Next](@next)
