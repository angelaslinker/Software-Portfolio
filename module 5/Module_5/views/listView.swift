//
//  listView.swift
//  Module_5
//
//  Created by Angela Slinker on 11/25/22.
//

import SwiftUI


struct listView: View {
    @EnvironmentObject var listViewModel: ListViewModel


    var body: some View {
        
        
        VStack {
            //Day of the week, image and quote
            Text("Monday")
                .font(.largeTitle)
                .bold()
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
        // List of each item that user has added to their to do list
        List{
            ForEach(listViewModel.items) {item in
                listRowView(item: item)
            }
        }
        .padding()
        .listStyle(PlainListStyle())
//        .navigationTitle("Monday")
        .navigationBarItems(
            leading: EditButton(),
            trailing:
            NavigationLink("Add", destination: addView())
        )
    }
}

//listView struct to show in the NavigationView
struct ListView_Previews: PreviewProvider{
    static var previews: some View {
        NavigationView{
            listView()
        }
        .environmentObject(ListViewModel())
    }
}
}




