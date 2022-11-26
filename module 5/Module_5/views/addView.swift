//
//  addView.swift
//  Module_5
//
//  Created by Angela Slinker on 11/25/22.
//

import SwiftUI



struct addView: View {
    

    @Environment(\.presentationMode) var presentationMode
    @EnvironmentObject var ListViewModel: ListViewModel
    @State var textFieldText: String = ""
        
    var body: some View {
        ScrollView{
            VStack {
                //Creates textbox for user to add to the to-do list
                TextField("Type something here", text: $textFieldText)
                    .padding(.horizontal)
                    .frame(height: 55 )
                    .background(/*@START_MENU_TOKEN@*//*@PLACEHOLDER=View@*/Color(hue: 0.716, saturation: 0.063, brightness: 0.958)/*@END_MENU_TOKEN@*/)
                    .cornerRadius(10)
                // Button to save what is typed
                Button(action: {
                    saveButtonPressed()
                }, label: {
                    Text("Save".uppercased())
                        .foregroundColor(.white)
                        .font(.headline)
                        .frame(width: 150)
                        .frame(height: 55)
                        .background(Color(hue: 0.726, saturation: 0.169, brightness: 0.904))
                        .cornerRadius(10)
            })
                //Image and quote
                Image("swift_app_img")
                    .resizable()
                    .scaledToFit()
                    .cornerRadius(20)
                    .overlay(
                        Text("“Opportunities don't happen, you create them.” — Chris Grosser")
                            .font(.system(.footnote, design:.rounded))
                            .fontWeight(.light)
                            .padding()
                            .background(Color(white: 0.9, opacity: 0.5))
                            .cornerRadius(20),
                        alignment: .bottom
                    )
                Spacer()
            }
            
            .padding(14)
        }
        .navigationTitle("Add An Item ")
    }
    //function that makes takes users input and puts it directly onto the home page to-do list
    func saveButtonPressed() {
        ListViewModel.addItem(title: textFieldText)
        presentationMode.wrappedValue.dismiss()
        
    }
    

}
 
struct addView_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView{
            addView()
        } .environmentObject(ListViewModel())
    }
}
