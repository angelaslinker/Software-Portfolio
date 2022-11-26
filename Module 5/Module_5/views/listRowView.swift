//
//  listRowView.swift
//  Module_5
//
//  Created by Angela Slinker on 11/25/22.
//

import SwiftUI

struct listRowView: View {
    
    let item: itemModel
    
    var body: some View {
        HStack{
            Text(item.title)
            Spacer()
        }

    }
}
