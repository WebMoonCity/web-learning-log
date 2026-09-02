//: [Previous](@previous)
import SwiftUI
import PlaygroundSupport

struct ExampleView: View {
    
    @State private var rotation: Double = 0
    
    var body: some View {
        VStack {
            Rectangle()
                .fill(Color.blue)
                .frame(width: 200, height: 200)
                .rotationEffect(.degrees(rotation))
                .animation(.linear(duration: 2), value: rotation)
            Button(action: {
                rotation = (rotation < 360 ? rotation + 10 : 0)
            }) {
                Text("Rotate")
            }
        }
        .padding(10)
    }
}

PlaygroundPage.current.setLiveView(ExampleView()
    .padding(100))
//: [Next](@next)

let myTuple = (10, 432.433, "This is a String")
let myString = myTuple.2
print(myString)

let (myInt, myFloat, myString02) = myTuple
print(myInt, myFloat)

let myTuple02 = (count: 10, length: 432.433, message: "This is a String, man!")

print(myTuple02.message)

//:optional type

var index: Int?

index = 3

var treeArray = ["Oak", "Pine", "Yew", "birch"]

if let index {
    print(treeArray[index])
} else {
    print("index does not contain a value")
}

//:chapter 06, 스위프트 연산자와 표현식


var myresult = 1 + 5 + 100
 
print(myresult)


let y = 3


let x = 171
let z = x ^ y
print("Result is \(z)")

let z02 = -x >> 1
print("result is \(z02)")


for index in 1...12 {
    print("Value of Index is \(index)")
}

var index_g = -1

repeat {
    print("hello")
    index_g += 1
} while index_g < 0

print("\(index_g)")
